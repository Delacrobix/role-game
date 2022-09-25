import express from 'express';
import controllers from '../controllers/controllers';

const router = express.Router();

router.get('/', function(req, res) {
    res.send('APP iniciada');
});

module.exports = router;