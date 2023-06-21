require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  USER_DB: process.env.USER_PS_DB,
  PASSWORD_DB: process.env.PASSWORD_PS_DB,
  PORT_DB: process.env.PORT_PS_DB,
  DATABASE_NAME: process.env.DATABASE_NAME_PS,
};
