var express = require('express');
var router = express.Router();

//追加モジュール
var nano = require('nano')('http://localhost:5984');
var db = require('nano')('http://localhost:5984/mtg');
var mtg = nano.use('mtg');
var assert = require('assert');


router.get('/', function(req, res, next) {
	var data = {'_id':'wed-mtg', 'tit':'ウィザーズタワー', 'con':'ふたりでしました。'};
	//mtg.insert({_id:req._id, title:req.tit, content:req.con}, function(err, body, header){
	mtg.insert({_id:data._id, title:data.tit, content:data.con}, function(err, body, header){
		if(err){
			console.log('[mtg.insert-err]', err.message);
			return;
		}else{
			console.log('you have changed the mtg database.');
		}
	});
});

module.exports = router;
