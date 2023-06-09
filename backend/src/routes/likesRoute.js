const likesController = require("../controllers/likes");

const router = require("express").Router();

router.post("/", likesController.addLike);

module.exports = router;
