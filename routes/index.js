'use strict';

var express = require('express');
var router = express.Router();
var models = require ("../models/index");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:one', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Save functionality
router.post('/addExpense', function(req, res, next){
	var data = req.body;
	data.type = "expense";
	console.log(data);
	models.Money.create(data, function(err, doc) {
		if (err) throw(err);
		res.send({status: 'Ok', id: doc._id});
	});
});
router.post('/addIncome', function(req, res, next){
	var data = req.body;
	data.type = "income";
	console.log(data);
	models.Money.create(data, function(err, doc) {
		if (err) throw(err);
		res.send({status: 'Ok', id: doc._id});
	});
});

module.exports = router;
