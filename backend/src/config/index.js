require("dotenv").config();

module.exports = {
  PORT,
  USER_DB: USER_PS_DB,
  PASSWORD_DB: PASSWORD_PS_DB,
  PORT_DB: PORT_PS_DB,
  DATABASE_NAME: DATABASE_NAME_PS,
} = process.env;
