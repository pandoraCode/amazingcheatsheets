const router = require('express').Router();
const User = require('../models/User');
const verifyLogin = require('../middlewares/verifyLogin');
const Sheet = require('../models/Sheet');
const validation = require("../validation");


router.post("/upload",verifyLogin,async (req,res)=>{


    const {error}= validation.register(res.body);
    if(error) return res.status(400).send(error.details);

    //get the user_id
    const publisher_id = User.findOne({_id:req.user});

    const sheet = new Sheet({
    
        publisher_id: req.user._id,
        title: req.body.title,
        description: req.body.description,
        link: req.body.link,
        tags: req.body.tags,
       
        

    });
  
    try{
        const savedSheet = await sheet.save();
        res.send(savedSheet);
    }catch(err){
        res.status(400).send(err);
    }
});


router.get("/all",(req,res)=>{
    res.send("return all sheets");
});
   
module.exports = router;