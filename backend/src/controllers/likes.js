const pool = require("../config/db");

exports.addLike = async (req, res) => {
  const { recipeId } = req.body;

  try {
    const query = `
      UPDATE userRecipes
      SET vote_count = vote_count + 1
      WHERE recipe_id = $1
      RETURNING vote_count
    `;
    const result = await pool.query(query, [recipeId]);
    const newVoteCount = result.rows[0].vote_count;

    res
      .status(200)
      .json({ message: "Like added successfully", vote_count: newVoteCount });
  } catch (error) {
    console.error("Error adding like:", error);
    res.status(500).json({ error: "An error occurred while adding the like" });
  }
};
