const pool = require("../../db");

exports.getAll = async (req, res) => {
  const userId = req.query.userId;

  try {
    const query = `
      SELECT recipe_id
      FROM favorites
      WHERE user_id = $1
    `;

    const { rows } = await pool.query(query, [userId]);

    console.log(rows);
    res.status(200).json(rows);
  } catch (err) {
    console.error("Error retrieving favorite recipes:", err);
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.create = async (req, res) => {
  const userId = req.query.userId;
  const { recipeId } = req.body;

  console.log(req.body);
  try {
    const query = `
      INSERT INTO favorites (user_id, recipe_id)
      VALUES ($1, $2)
      RETURNING *
    `;

    const { rows } = await pool.query(query, [userId, recipeId]);
    const newSavedRecipe = rows[0]; // Retrieve the newly added saved recipe from the result rows

    res.status(201).json(newSavedRecipe);
  } catch (err) {
    console.error("Error adding saved recipe:", err);
    res.status(500).json({ error: "An error occurred" });
  }
};
