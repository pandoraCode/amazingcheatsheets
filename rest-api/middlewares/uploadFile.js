const util = require("util");
const multer = require("multer");

const ROOT_PATH = "./public/uploads";

const storage = 
  
  multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, ROOT_PATH);
    },
    filename: (req, file, cb) => {
  
      cb(null,   Date.now() +  '-' +file.originalname );
    },
  });



const upload =  multer({
      
    storage : storage
}).any();




module.exports.upload = upload;
