const pool = require("../config/db");

exports.addRecipe = async (req, res) => {
  try {
    const { user_id, recipe_id, vote_count, house_id } = req.body;

    // Insert the recipe into the UserRecipes table
    const query = `
      INSERT INTO userRecipes (user_id, recipe_id,vote_count,house_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const values = [user_id, recipe_id, vote_count, house_id];

    const result = await pool.query(query, values);

    // Send the newly added recipe as the response
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error adding recipe:", error);
    res
      .status(500)
      .json({ error: "An error occurred while adding the recipe" });
  }
};

exports.getAll = async (req, res) => {
  try {
    const houseId = req.params.houseId;

    console.log(req);
    // Query the UserRecipes table for recipes in the specified house
    const query = `
      SELECT *
      FROM userRecipes
      WHERE house_id = $1
    `;
    const values = [houseId];

    const result = await pool.query(query, values);

    // Send the recipes as the response
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error retrieving recipes:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving recipes" });
  }
};

exports.removeRecipe = async (req, res) => {
  const userId = req.query.userId;
  const recipeId = req.params.recipeId;

  try {
    const query =
      "DELETE FROM userRecipes WHERE user_id = $1 AND recipe_id = $2";
    await pool.query(query, [userId, recipeId]);

    res.status(200).json({ message: "Recipe removed successfully" });
  } catch (err) {
    console.error("Error removing recipe:", err);
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.finishPoll = async (req, res) => {
  try {
    const query = `
      SELECT recipe_id, MAX(vote_count) as max_vote_count
      FROM userRecipes
      GROUP BY recipe_id
      ORDER BY max_vote_count DESC
      LIMIT 1
    `;
    const { rows } = await pool.query(query);
    const winner = rows[0];

    res.status(200).json({ winner });
  } catch (error) {
    console.error("Error finishing poll:", error);
    res
      .status(500)
      .json({ error: "An error occurred while finishing the poll" });
  }
};
