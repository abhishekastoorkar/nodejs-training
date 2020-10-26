const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const api = require('./src/constants/api');
const trainerRouter = require('./src/routes/trainers.route');

const app = express();

const handleUnhandledOperation = () => {
  process
    .on('unhandledRejection', (reason, p) => {
      console.error('Unhandled Rejection at Promise', reason);
    })
    .on('uncaughtException', (err) => {
      console.error('Uncaught Exception thrown', err);
      process.exit(1);
    });
};

module.exports = () => {
  handleUnhandledOperation();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(logger('dev'));
  app.use(api.TRAINERS, trainerRouter);

  app.use('*', (req, res) => res.status(404).json('Page not found'));

  return app;
};
