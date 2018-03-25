const router      = require('express').Router(),
      helpers     = require('../helpers');

router.route('/game/play')
.get(helpers.question.getQuestions);

module.exports = router;