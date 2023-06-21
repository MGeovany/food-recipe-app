const pool = require("../config/db");

const createUser = async (req, res) => {
  const { user_id, user_name } = req.body;

  try {
    const query =
      "INSERT INTO users (user_id, user_name) VALUES ($1, $2) RETURNING *";
    const values = [user_id, user_name];

    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createUser };
