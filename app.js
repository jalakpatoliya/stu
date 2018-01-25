var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    mongoXlsx = require("mongo-xlsx"),
    bodyParser = require("body-parser"),
    multer    = require("multer"),
    models  = require('./models/student'),
    storage = multer.diskStorage(
      {
        destination: function (req, file, cb) {cb(null, 'uploads/')},
        filename: function (req, file, cb) {cb(null, file.originalname)}
      });

var upload = multer({ storage: storage });

//==============Routes==========================
var indexRoutes = require('./routes/index'),
    showRoutes  = require('./routes/show');
app.use(indexRoutes);
app.use(showRoutes);
//==============================================

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/demo3");



app.use(bodyParser.urlencoded({
  extended: true
}));



app.listen(3823,function(){
  console.log("server started");
})
