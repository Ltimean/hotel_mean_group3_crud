var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Hotel = require('../models/Hotel.js');

/* GET ALL Hotels */
router.get('/', function(req, res, next) {
 Hotel.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Hotel BY ID */
router.get('/:id', function(req, res, next) {
 Hotel.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Hotel */
router.post('/', function(req, res, next) {
 Hotel.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Hotel */
router.put('/:id', function(req, res, next) {
 Hotel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Hotel */
router.delete('/:id', function(req, res, next) {
 Hotel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
