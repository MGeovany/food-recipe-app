const pool = require("../../db");

exports.addRecipe = async (req, res) => {
  try {
    const { user_id, recipe_id, vote_count } = req.body;

    // Insert the recipe into the UserRecipes table
    const query = `
      INSERT INTO userRecipes (user_id, recipe_id,vote_count)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    const values = [user_id, recipe_id, vote_count];

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
