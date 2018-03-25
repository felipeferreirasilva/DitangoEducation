const   db          = require('../models'),
        rand        = require('unique-random')(0, 2);

exports.getQuestions = function(req, res){
    var questionNumber = rand();
    db.Question.find({})
    .then(function(data){
        res.render('game', {question: data[questionNumber]});
    })
    .catch(function(err){
        console.log(err);
    })
}