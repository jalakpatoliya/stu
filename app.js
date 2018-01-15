var express = require("express"),
    mongoose = require("mongoose"),
    mongoXlsx = require("mongo-xlsx"),
    multer    = require("multer"),
    storage = multer.diskStorage(
      {
        destination: function (req, file, cb) {cb(null, 'uploads/')},
        filename: function (req, file, cb) {cb(null, file.originalname)}
      })

var upload = multer({ storage: storage });

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/demo3");

var app = express();




//==========================
// Creating Schema and model
//==========================
 // var studentSchema = new mongoose.Schema({}, { strict: false });
var studentSchema = new mongoose.Schema({
  name:String,
  age:Number
});
var Students = mongoose.model("Students",studentSchema);

 // var abc = [{name:"jalak",age:22},{name:"parth",age:25}];
// Students.create(abc);
// var stud = new Students({name:"jalak",age:22});
// stud.save();
// Students.create({name:"jalak",age:22});





//======================================
// GET Route
//======================================
app.get("/",function(req,res){
  res.render("index.ejs")
})




//======================================
// PoST Route
//======================================
app.post("/",upload.single("file-to-upload"),function (req,res){
  console.log(req.file.path);
  var model = null;
  mongoXlsx.xlsx2MongoData("./"+req.file.path,studentSchema,function (err,mongoData) {
    console.log("Mongo data:",mongoData);
    Students.create(mongoData);
  })
  res.redirect("/")
})









//======================
// SHOW ROUTE
//======================
app.get("/show",function(req,res){
  Students.find({},function(err,student){
    if (err) {
      console.log(err);
    } else {
      console.log(student);
      res.render("show.ejs",{student:student})
    }
  })
})










app.listen(3823,function(){
  console.log("server started");
})
