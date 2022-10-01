import express from 'express';
import body_parser from 'body-parser';
import method_override from 'method-override';
import morgan from 'morgan';
import auth_routes from './auth/routes/routes';
import passport from 'passport';
import env_config from 'dotenv';
import path from 'path';

// *Connection to database
import db_connection from './database/db-connection'; 

const app = express();

app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());
app.use(passport.initialize());
app.use(method_override());

const statics = __dirname;

// *Views configuration
app.use(express.static(path.join(statics, '..', '..', 'frontend', 'auth', 'static')));
app.set('views', path.join(statics, '..', '..', 'frontend', 'auth', 'views'));
app.set('view engine', 'pug');

app.use(morgan('dev'));

// *Routes from authentication module
app.use(auth_routes);  

export default app;

/* 
  TODO:
    ? Implementar inicio de sesion con google y steam
    
    ? Impedir que un usuario se registre sin cumplir las condiciones de seguridad necesarias en la contraseña

    ?
    ?
    ?
*/