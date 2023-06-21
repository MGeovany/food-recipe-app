const pool = require("../config/db");

const createUser = async (req, res) => {
  const { user_id, user_name } = req.body;

  try {
    // Check if the user_id already exists
    const checkQuery = "SELECT * FROM users WHERE user_id = $1";
    const checkValues = [user_id];
    const checkResult = await pool.query(checkQuery, checkValues);

    if (checkResult.rows.length > 0) {
      // User with the same user_id already exists
      return res.status(409).json({ msg: "User already exists" });
    }

    // Insert the new user
    const insertQuery =
      "INSERT INTO users (user_id, user_name) VALUES ($1, $2) RETURNING *";
    const insertValues = [user_id, user_name];
    const result = await pool.query(insertQuery, insertValues);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createUser };
