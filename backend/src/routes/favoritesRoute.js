const favoritesController = require("../controllers/favorites");

const router = require("express").Router();

router.get("/", favoritesController.getAll);

router.post("/", favoritesController.create);

router.delete("/:recipeId", favoritesController.delete);

module.exports = router;
