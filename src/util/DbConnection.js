const Sequelize = require("sequelize");
const config = require("../configs/config");

let dbInstance;

class DbConnection {
  constructor() {
    if (dbInstance) {
      return dbInstance;
    } else {
      return this.createDbInstance();
    }
  }

  createDbInstance() {
    dbInstance = new Sequelize(
      config.dbName,
      config.userName,
      config.password,
      {
        host: config.hostname,
        dialect: "mysql",
      }
    );
    return dbInstance;
  }
}

module.exports = new DbConnection();
