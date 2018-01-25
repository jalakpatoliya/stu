var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/demo3");


//==========================
// Creating Schema and model
//==========================
 // var studentSchema = new mongoose.Schema({}, { strict: false });
var studentSchema = new mongoose.Schema({

  _id:Number,
  name1:String,

  basic:{
    name:{First_Name:String,Middle_Name:String,Last_Name:String},
    age:Number,
    gender:String,
    category:String,
    mode_of_admission:String,
    mob_no:Number,
    email:String,
    branch:String,
    date_of_birth:Date,
    address:{
      city:String,
      pincode:Number,
      district:String,
      state:String
    },
  },

  S_1:{ TermFees:Number,
        ExamFeesRegular:Number
      },

  S_2:{ TermFees:Number,
        ExamFeesRegular:Number,
        ExamFeesRemedial:Number
      },
  D_2:{
        ExamFeesRemedial:Number
  },

});

 var Students = mongoose.model("Students",studentSchema);



 // var abc = [{name:"jalak",age:22},{name:"parth",age:25}];
// Students.create(abc);
// var stud = new Students({name:"jalak",age:22});
// stud.save();
// Students.create({name:"jalak",age:22});

//==========exporting multiple models ref:- https://stackoverflow.com/questions/13857203/cant-get-data-from-database-after-multiple-schema-declared-mongoose-express
module.exports =  {
  Students:Students,
  studentSchema:studentSchema
};
