var express = require('express');
var router = express.Router();

//追加モジュール
var nano = require('nano')('https://ma2snct.cloudant.com');
var db = require('nano')('https://ma2snct.cloudant.com/mtg');
var mtg = nano.use('mtg');
var assert = require('assert');
var fs = require('fs');


router.get('/', function(req, res, next) {
  db.get('mtg-wed-img-2', function(err, body){
	  if(!err)
		  console.log(body.foo);
		  //console.log(buffer);
  });
});

module.exports = router;
