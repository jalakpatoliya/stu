var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    mongoXlsx = require("mongo-xlsx"),
    bodyParser = require("body-parser"),
    multer    = require("multer"),
    storage = multer.diskStorage(
      {
        destination: function (req, file, cb) {cb(null, 'uploads/')},
        filename: function (req, file, cb) {cb(null, file.originalname)}
      });

var upload = multer({ storage: storage });


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/demo3");



app.use(bodyParser.urlencoded({
  extended: true
}));


//==========================
// Creating Schema and model
//==========================
 // var studentSchema = new mongoose.Schema({}, { strict: false });
var studentSchema = new mongoose.Schema({
  _id:Number,
  name:String,
  age:Number,
  fees:{amount:Number}
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
  // var model = 32;
  mongoXlsx.xlsx2MongoData("./"+req.file.path,studentSchema,function (err,mongoData) {
    console.log("Mongo data:",mongoData);
    //==========================for merging objects withsame Enrollment
    mongoData.forEach(elem => {
      Students.findById(elem._id,function (err,data) {
        if (!data) {
          console.log("creating and passing new obj");
          var _id = elem._id,
              name = elem.name,
              amount= elem.amount,
              age  = elem.age;
          var obj = {_id:_id,name:name,age:age,fees:{amount:amount}};

          Students.create(obj);

        } else {
          console.log("found object - "+data);
          var _id = elem._id,
              name = elem.name,
              amount= elem.amount,
              age  = elem.age;
          var obj = {_id:_id,name:name,age:age,Fees:{amount:amount}};
          Students.findByIdAndUpdate(elem._id,obj,function(){
            console.log("updated");

          })
        }
      })
    });
    //==========================================
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
