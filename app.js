const express = require('express');
const bodyParser = require('body-parser');

const logger = require('morgan');
const api = require('./src/constants/api');
const trainerRoute = require('./src/routes/trainersRoute');
const trainingProgramRoute = require('./src/routes/trainingProgramRoute');
const authRoute = require('./src/routes/congnitoRoutes');

const app = express();

const handleUnhandledOperation = () => {
  process
    .on('unhandledRejection', (reason) => {
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
  app.use(api.AUTHENTICATE, authRoute);

  app.use('*', (req, res) => res.status(404).json('Page not found'));

  return app;
};
