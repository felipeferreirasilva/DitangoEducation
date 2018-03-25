const router        = require('express').Router(),
      helpers       = require('../helpers');

router.route('/')
.get(function(req, res){    
    res.render('index');
});

router.route('/question/new')
.get(function(req, res){
    res.render('newquestion')
});

module.exports = router;