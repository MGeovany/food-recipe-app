CREATE DATABASE food_recipe_app_db

-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  userName VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Favorites table
CREATE TABLE favorites (
  user_id INT REFERENCES users(id),
  recipe_id VARCHAR(255),
  PRIMARY KEY (user_id, recipe_id)
);
