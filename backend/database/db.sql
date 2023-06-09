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

-- Recipes added by a user
CREATE TABLE userRecipes (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  recipe_id VARCHAR(255),
  vote_count INT DEFAULT 0,
  house_id INT REFERENCES houses(house_id),
  created_at TIMESTAMP DEFAULT NOW()
);

-- House table
CREATE TABLE houses (
  house_id SERIAL PRIMARY KEY,
  house_name VARCHAR(255) NOT NULL,
  user_ids INT[]
);

-- Votes table
CREATE TABLE votesTable (
  vote_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  recipe_id VARCHAR(255),
  vote_type VARCHAR(5)
  created_at TIMESTAMP DEFAULT NOW()
);
