import express from 'express';
import body_parser from 'body-parser';
import method_override from 'method-override';
import morgan from 'morgan';
import routes from './routes/routes';
import env_config from 'dotenv';

// *Connection to database
import db_connection from './database/db-connection'; 

const app = express(),
      statics = __dirname;

app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());
app.use(method_override());
app.use(morgan('dev'));
app.use(express.static(statics));
app.use(routes);  // *Routes imported

export default app;