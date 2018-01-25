//=================================Importing all dependencies============
var mongoose = require('mongoose'),
    express  = require('express'),
    router   = express.Router(),
    models  = require('../models/student'); //Importing multiple models and schemas
//=======================================================================

//======================
// SHOW ROUTE
//======================
router.get("/show",function(req,res){
  models.Students.find({},function(err,student){
    if (err) {
      console.log(err);
    } else {
      console.log(student);
      res.render("show.ejs",{student:student})
    }
  })
})


module.exports = router;
