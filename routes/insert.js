var express = require('express');
var router = express.Router();

//追加モジュール
var nano = require('nano')('http://localhost:5984');
var db = require('nano')('http://localhost:5984/mtg');
var mtg = nano.use('mtg');
var assert = require('assert');
var fs = require('fs');


router.get('/', function(req, res, next) {
	var data = {'tit':'ウィザーズタワー', 'con':'ふたりでしました。'};
	fs.readFile('./public/images/a.jpeg', function(err, data){
		if(!err){
			mtg.multipart.insert({'foo':'bar'}, [{name: 'a.jpg', data: data, content_type:'image/jpeg'}], 'mtg-wed-img-2', function(err, body){
				if(!err)
					console.log('done');
			});
		}
	});
});

module.exports = router;
