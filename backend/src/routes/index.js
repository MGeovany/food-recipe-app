var router = require("express").Router();
const pool = require("../../db.js");

router.use("/favorites", require("./favoritesRoute.js"));

router.get("/db", async (req, res) => {
  const response = await pool.query("SELECT NOW()");
  console.log(response);
  res.json(response.rows[0].now);
});

module.exports = router;
