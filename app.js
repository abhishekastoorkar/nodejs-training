const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const api = require('./src/constants/api');
const trainerRoute = require('./src/routes/trainers.route');
const trainingProgramRoute = require('./src/routes/training.program.route');

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
  app.use(api.TRAINERS, trainerRoute);

  app.use(api.TRAINING_PROGRAM, trainingProgramRoute);
  app.use('*', (req, res) => res.status(404).json('Page not found'));

  return app;
};
