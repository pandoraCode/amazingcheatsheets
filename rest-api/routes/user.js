const router = require('express').Router();
const User = require('../models/User');
const validation = require("../validation");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

 router.post('/register', async (req,res)=>{


    //check for erros in submitted data
    const {error}= validation.register(res.body);

    if(error) return res.status(400).send(error.details);

    //check if email exist
    const emailExist = await User.findOne({email:req.body.email});

    if(emailExist) return res.status(400).send("Email already exists");

    //password hashing
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.password, salt)
 
    
    const user = new User({
    
        name: req.body.name,
        email: req.body.email,
        password: hash,
        avatar: req.body.avatar,
        areaOFexpertise:req.body.areaOFexpertise
        

    });

    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
 });


router.post('/login',async (req,res)=>{

    try{

        const {error} = validation.login(req.body);

        console.log(JSON.stringify(req.body));

        if (error) return res.status(400).send(error.details);
   
               //check if the user is registerd
   
               const userExist = await User.findOne({email:req.body.email});
   
               if (!userExist) return res.status(400).send("Email doesn't exists, create an account");
   
              
   
               //check if password is correct
                const validPass = await bcrypt.compare(req.body.password,userExist.password);
                if(!validPass) return res.status(400).send("INvalid password");
   
                //login token
                const token = jwt.sign({_id:userExist.id}, process.env.TOKEN_SECRET);
   
                res.header('auth-token',token).send(token);
   

    }catch {
        res.status(400).send(err);
      }
    

    
    });


module.exports = router;