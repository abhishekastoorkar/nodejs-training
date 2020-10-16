const env = require('./config');

module.exports = {
  development: {
    username: env.userName,
    password: env.password,
    database: env.dbName,
    host: env.hostname,
    dialect: 'mysql',
  },
  test: {
    username: env.userName,
    password: env.password,
    database: 'test_database',
    host: env.hostname,
    dialect: 'mysql',
  },
};
