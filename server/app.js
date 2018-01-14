// server/app.js
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import initializeDb from './db';
import middleware from './middleware';
import api from './api';
import config from './config';

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// connect to db
initializeDb(db => {

  // internal middleware
  app.use(middleware({ config, db }));

  // api router
  app.use('/api', api({ config, db }));

  // Serve static assets
  app.use(express.static(path.resolve(__dirname, '..', 'dist')));

  // Always return the main index.html, so react-router render the route in the client
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
  });
});

module.exports = app;