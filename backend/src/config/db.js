const { Pool } = require("pg");
const { USER_DB, PASSWORD_DB, PORT_DB, DATABASE_NAME } = require("./");

const pool = new Pool({
  user: USER_DB,
  password: PASSWORD_DB,
  host: "localhost",
  port: PORT_DB,
  database: DATABASE_NAME,
});
module.exports = pool;
