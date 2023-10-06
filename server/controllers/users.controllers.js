import { pool } from "../db.js";

export const createUser = async (req, res) => {
  try {
    const { userId, login, company, bio, followers, avatar_url } = req.body;
    const [result] = await pool.query(
      "INSERT INTO users(userId, login, company, bio, followers, avatar_url) VALUES (?, ?, ?, ?, ?, ?)",
      [userId, login, company, bio, followers, avatar_url]
    );
    res.json({
      id: result.userId,
      userId,
      login,
      company,
      bio,
      followers,
      avatar_url,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM users ORDER BY id ASC");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
