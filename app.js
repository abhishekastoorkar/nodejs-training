const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
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
  console.log('int epp');
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(api.API, trainerRouter);

  app.use('*', (req, res) => res.status(404).json('Page not found'));

  return app;
};
