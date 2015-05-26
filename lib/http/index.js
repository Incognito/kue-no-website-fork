/*!
 * q - http
 * Copyright (c) 2011 LearnBoost <tj@learnboost.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var express = require('express');

// setup

var app        = express()
  , bodyParser = require('body-parser')
  , json       = require('./routes/json')
  , util       = require('util')

// expose the app

module.exports = app;

// JSON api

app.get('/stats', json.stats);
app.get('/job/search', json.search);
app.get('/jobs/:from..:to/:order?', json.jobRange);
app.get('/jobs/:type/:state/:from..:to/:order?', json.jobTypeRange);
app.get('/jobs/:type/:state/stats', json.jobTypeStateStats);
app.get('/jobs/:state/:from..:to/:order?', json.jobStateRange);
app.get('/job/types', json.types);
app.get('/job/:id', json.job);
app.get('/job/:id/log', json.log);
app.put('/job/:id/state/:state', json.updateState);
app.put('/job/:id/priority/:priority', json.updatePriority);
app.delete('/job/:id', json.remove);
app.post('/job', bodyParser.json(), json.createJob);
