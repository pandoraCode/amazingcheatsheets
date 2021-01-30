const router = require('express').Router();
const User = require('../models/User');
const verifyLogin = require('../middlewares/verifyLogin');
const Sheet = require('../models/Sheet');
const validation = require("../validation");
const file = require("../middlewares/uploadFile");
const fileUpload = require('express-fileupload');
const e = require('express');
const { query } = require('express');



  

const dbSaveSheet =async (sheetObj,res)=> {


        // const {error}= validation.uploadedSheet(sheetObj) ;
        // if(error)  res.send( error.details)
  try{
    const sheet =  new Sheet({
        publisher_id: sheetObj.publisher_id,
        title: sheetObj.title,
        description: sheetObj.description,
        path:sheetObj.path,
        tags: sheetObj.tags,
        likes: 0
    });

    const  savedSheet = await sheet.save();
    res.send("true") ;


  }catch(err) {
      res.send(err);
  }

}


router.post("/upload", (req,res)=>{
    

     try{
        file.upload(req,res,(err) =>{

            

            if (err){
                res.status(400).send("error here");
            }else{              
        req.body.path = req.files[0].path;


        dbSaveSheet(req.body,res);

       

            }
        
        });

     } catch (err){
         res.status(400).send("err");
     }
           

});


router.post("/like",async (req,res)=>{
    
   const filter = {_id:req.body.id};
   const update = {likes : this.likes + 1};

   const sheet = await Sheet.findOneAndUpdate(
    { _id: req.body.id }, { $inc: { likes: 1 }}
           );
           res.send(sheet);
   });


router.get("/getall",async(req,res)=>{

    const sheets = await Sheet.find();
    res.send(sheets);
    
});

router.get("/public/uploads/1608092600052-diplome.jpg", (req,res)=>{
    res.sendFile("/home/pandora/Desktop/projects/amazingstylesheets/rest-api/public/uploads/1608092600052-diplome.jpg");
}
  
);





   
module.exports = router;