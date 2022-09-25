const express = require('express'),
      body_parser = require('body-parser'),
      method_override = require('method-override'),
      morgan = require('morgan'),
      controllers = require('./controllers/controllers'),
      env_config = require('dotenv');

const app = express(),
      statics = __dirname;

app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());
app.use(method_override());
app.use(morgan('dev'));
app.use(express.static(statics));
app.use(require('./server/server'));          // *Server connection
app.use(require('./database/db-connection')); // *Database Connection

app.use(require('./routes/routes'));          // *Routes imported