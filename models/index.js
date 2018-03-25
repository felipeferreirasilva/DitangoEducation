const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dtge');

module.exports.Question = require('./question');