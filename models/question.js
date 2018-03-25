const mongoose = require('mongoose');

const Question = mongoose.model('Question', {
    title: String,
    options:
    [
        {
            text: String,
            img: String, 
            correct: Boolean
        },
        {
            text: String,
            img: String, 
            correct: Boolean
        },
        {
            text: String,
            img: String, 
            correct: Boolean
        },
        {
            text: String,
            img: String, 
            correct: Boolean
        }
    ]
});

module.exports = Question;