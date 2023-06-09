const pollController = require("../controllers/poll");

const router = require("express").Router();

router.get("/:houseId", pollController.getAll);

router.post("/", pollController.addRecipe);

router.post("/finish", pollController.finishPoll);

router.delete("/:recipeId", pollController.removeRecipe);

module.exports = router;
