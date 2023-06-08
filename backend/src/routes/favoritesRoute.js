const favoritesController = require("../controllers/favorites");

const router = require("express").Router();

router.get("/", favoritesController.getAll);

router.post("/", favoritesController.create);

module.exports = router;
