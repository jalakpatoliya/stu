var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/demo3");


//==========================
// Creating Schema and model
//==========================
 // var studentSchema = new mongoose.Schema({}, { strict: false });
var studentSchema = new mongoose.Schema({

  _id:Number,
  cur_sem:Number,
  total_back:Number,                                            //
  backs:{
    sem1:Number,
    sem2:Number,
    sem3:Number,
    sem4:Number,
    sem5:Number,
    sem6:Number,
    sem7:Number,
    sem8:Number,
  },
  basic:{
    course          :String,
    name            :String,
    age             :Number,
    gender          :String,
    category        :String,
    mode_of_adm     :String,
    mob_no          :Number,
    email           :String,
    date_of_birth   :Date,
    add_t           :String,
    add_p           :String,
    tfw             :String,
    branch          :String,
    dob             :String
  },

  s_1:{
    Term_fee    :Number,
    Exam_fee_Reg:Number,
    result:{
      spi :Number, cpi :Number, result :String, cur_back :Number,
      sub1:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub2:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub3:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub4:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub5:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub6:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub7:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub8:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub9:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub10:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },

    }
  },
  s_2:{
    Term_fee    :Number,
    Exam_fee_Reg:Number,
    result:{
      spi :Number, cpi :Number, result :String, cur_back :Number,
      sub1:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub2:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub3:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub4:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub5:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub6:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub7:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub8:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub9:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub10:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },

    }
  },
  s_3:{
    Term_fee    :Number,
    Exam_fee_Reg:Number,
    result:{
      spi :Number, cpi :Number, result :String, cur_back :Number,
      sub1:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub2:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub3:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub4:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub5:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub6:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub7:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub8:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub9:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub10:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },

    }
  },
  s_4:{
    Term_fee    :Number,
    Exam_fee_Reg:Number,
    result:{
      spi :Number, cpi :Number, result :String, cur_back :Number,
      sub1:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub2:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub3:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub4:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub5:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub6:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub7:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub8:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub9:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub10:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },

    }
  },
  s_5:{
    Term_fee    :Number,
    Exam_fee_Reg:Number,
    result:{
      spi :Number, cpi :Number, result :String, cur_back :Number,
      sub1:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub2:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub3:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub4:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub5:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub6:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub7:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub8:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub9:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub10:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },

    }
  },
  s_6:{
    Term_fee    :Number,
    Exam_fee_Reg:Number,
    result:{
      spi :Number, cpi :Number, result :String, cur_back :Number,
      sub1:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub2:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub3:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub4:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub5:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub6:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub7:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub8:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub9:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub10:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },

    }
  },
  s_7:{
    Term_fee    :Number,
    Exam_fee_Reg:Number,
    result:{
      spi :Number, cpi :Number, result :String, cur_back :Number,
      sub1:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub2:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub3:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub4:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub5:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub6:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub7:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub8:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub9:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub10:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },

    }
  },
  s_8:{
    Term_fee    :Number,
    Exam_fee_Reg:Number,
    result:{
      spi :Number, cpi :Number, result :String, cur_back :Number,
      sub1:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub2:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub3:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub4:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub5:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub6:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub7:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub8:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub9:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub10:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },

    }
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
