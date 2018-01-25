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


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/demo3");



app.use(bodyParser.urlencoded({
  extended: true
}));







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
  mongoXlsx.xlsx2MongoData("./"+req.file.path,models.studentSchema,function (err,mongoData) {
    console.log("Mongo data:",mongoData);
    //==========================for merging objects withsame Enrollment
    mongoData.forEach(elem => {
      models.Students.findById(elem._id,function (err,data) {
        if (!data) {
          console.log("creating and passing new obj");
          var _id = elem._id,
              nam = elem['name of mine']
              // amount= elem.amount,
              // age  = elem.age;
          var obj = {_id:_id,name1:nam};
          console.log("obj:",nam);
          models.Students.create(obj);

        } else {
          console.log("found object - "+data);
          var _id = elem._id,
              name = elem.name,
              amount= elem.amount,
              age  = elem.age;
          var obj = {_id:_id,name:name,age:age,Fees:{amount:amount}};
          models.Students.findByIdAndUpdate(elem._id,obj,function(){
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
  models.Students.find({},function(err,student){
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
