const pollController = require("../controllers/poll");

const router = require("express").Router();

router.get("/:houseId", pollController.getAll);

router.post("/", pollController.addRecipe);

module.exports = router;
