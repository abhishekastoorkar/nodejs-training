const env = require('./config');

module.exports ={
  "development": {
    "username": env.userName,
    "password": env.password,
    "database": env.dbName,
    "host": env.hostname,
    "dialect": "mysql"
  }
}

console.log(env.dbName);