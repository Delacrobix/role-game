import express from "express";
import controllers from "../controllers/login-controllers";
import passport from 'passport';
import GoogleStrategy from 'passport-google-oidc';

const router = express.Router();

/**
 * *Rutas dedicadas a renderizar las vistas.
 */
router.get('/auth/login', function (req, res) {
  res.render('login', {});
});

router.get('/auth/register', function (req, res) {
  res.render('register', {});
});

router.get('/auth/forgot-pass', function (req, res) {
  res.render('forgotpassword', {});
});

router.get('/login/federated/google', passport.authenticate('google'));

/**
 * *Rutas dedicadas al login.
 */
router.route('/auth/login/verify').post(controllers.findUserAndPassword);
router.route('/auth/register/save-user').post(controllers.addUser);
// router.route("/addUser").post(controllers.addUser);
// router.route("/getUser/:userId").get(controllers.findUserById);

export default router;
