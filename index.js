const db = require("./src/util/index");
const app = require("./app")();
const config = require("./src/configs/config");

const initializeDbAndStartServer = async () => {
  await db.connection.sync();
  console.info(`Database connected!`);
  console.log(config.port);
  app.listen(3000);
  console.info(`server listens on port ${config.port}`);
};

initializeDbAndStartServer();
