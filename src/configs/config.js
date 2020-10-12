const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
  userName: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dbName: process.env.DATABASE_NAME,
  hostname: process.env.DB_HOSTNAME,
  accessID: process.env.ACCESS_ID,
  secretKey: process.env.SECRET_KEY,
};
