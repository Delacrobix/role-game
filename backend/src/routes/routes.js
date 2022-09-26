import express from 'express';
import controllers from '../controllers/login-controllers';

const router = express.Router();

/**
 * *Rutas dedicadas a renderizar las vistas.
 */
router.get('/', function(req, res) {
    res.send('APP iniciada');
});

/**
 * *Rutas dedicadas al login.
 */
 router.route('/addUser').post(controllers.addUser);
 router.route('/getUser/:userId').get(controllers.findUserById);

export default router;