const userController = require("../controllers/user");

const router = require("express").Router();

router.post("/", userController.createUser);

module.exports = router;
