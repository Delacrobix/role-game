const express = require('express'),
      router = express.Router(),
      controllers = require('../controllers/controllers');

router.get('/', function(req, res) {
    res.send('APP iniciada');
});

module.exports = router;