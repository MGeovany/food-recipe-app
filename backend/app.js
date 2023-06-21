const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT } = require("./src/config");

const app = express();

app.use(cors({ origin: "*" }));
app.listen(PORT, () => {
  console.log(`running port ${PORT}`);
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", require("./src/routes"));

module.exports = app;
