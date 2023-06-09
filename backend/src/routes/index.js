var router = require("express").Router();

router.use("/favorites", require("./favoritesRoute.js"));

router.use("/poll", require("./pollRoute.js"));

router.use("/likes", require("./likesRoute.js"));

module.exports = router;
