var express = require('express');
var mysql = require('mysql');
var connect = require('../utils/sqlconnect');
var router = express.Router();

const templateTypes = [
  { name: "Jade", usefulness : "sucky" },
  { name: "EJS", usefulness : " a little better" },
  { name: "Handlebars", usefulness : "good" }
]


/* GET home page. */
router.get('/', function(req, res, next) {


  connect.query('SELECT * FROM mainmodel', (err, result, fields) => {
    if (err) {
      throw err; console.log(err);
    }else {
      console.log(result);
    }
  });


  res.render('home', {
     title: 'Express',
     message : "I really Dont know about EJS",
     template : templateTypes,
     anothermessage : "right now I am with handlebars"
   });
});

module.exports = router;
