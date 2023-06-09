var router = require("express").Router();

router.use("/favorites", require("./favoritesRoute.js"));

router.use("/poll", require("./pollRoute.js"));

module.exports = router;
