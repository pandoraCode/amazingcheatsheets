const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const multer = require("multer");
const sheetRoute = require("./routes/sheet");
const cors = require('cors');
const app = express();
const bodyParser =require("body-parser");


dotenv.config();
//import routes
const userRoute = require('./routes/user');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//connect to database
mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
	console.log("connected to database");
})


//middlwares
app.use(express.json());
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors());

//routes Middlewares



app.use("/api/user",userRoute);
app.use("/api/sheets/",sheetRoute);



app.listen(3000,()=>console.log('Server Up and runing'));