CREATE DATABASE food_recipe_app_db

-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_id NUMERIC(40,0) UNIQUE,
  user_name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Favorites table (1:N) - users
CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  user_id NUMERIC(40,0) REFERENCES users(user_id),
  recipe_id VARCHAR(255),
);

-- Houses table
CREATE TABLE houses (
  house_id SERIAL PRIMARY KEY,
  house_name VARCHAR(255) NOT NULL
);

-- UsersHouses table for the many-to-many relationship
CREATE TABLE users_houses (
  user_id NUMERIC(40,0) REFERENCES users(user_id),
  house_id INT REFERENCES houses(house_id),
  PRIMARY KEY (user_id, house_id)
);

-- Recipes added by a user (1:N) - users
CREATE TABLE userRecipes (
  id SERIAL PRIMARY KEY,
  user_id NUMERIC(40,0) REFERENCES users(user_id),
  recipe_id VARCHAR(255),
  vote_count INT DEFAULT 0,
  house_id INT REFERENCES houses(house_id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Historical table for userRecipe
CREATE TABLE userRecipes_history (
  id SERIAL PRIMARY KEY,
  user_id NUMERIC(40,0),
  recipe_id VARCHAR(255),
  vote_count INT,
  house_id INT,
  created_at TIMESTAMP,
  operation CHAR(1), -- 'I' for insert, 'U' for update, 'D' for delete
  change_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trigger for INSERT operation
CREATE OR REPLACE FUNCTION userRecipes_insert_trigger()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO userRecipes_history (user_id, recipe_id, vote_count, house_id, created_at, operation)
  VALUES (NEW.user_id, NEW.recipe_id, NEW.vote_count, NEW.house_id, NEW.created_at, 'I');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER userRecipes_after_insert
AFTER INSERT ON userRecipes
FOR EACH ROW
EXECUTE FUNCTION userRecipes_insert_trigger();

-- Trigger for UPDATE operation
CREATE OR REPLACE FUNCTION userRecipes_update_trigger()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO userRecipes_history (user_id, recipe_id, vote_count, house_id, created_at, operation)
  VALUES (NEW.user_id, NEW.recipe_id, NEW.vote_count, NEW.house_id, NEW.created_at, 'U');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER userRecipes_after_update
AFTER UPDATE ON userRecipes
FOR EACH ROW
EXECUTE FUNCTION userRecipes_update_trigger();

-- Trigger for DELETE operation
CREATE OR REPLACE FUNCTION userRecipes_delete_trigger()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO userRecipes_history (user_id, recipe_id, vote_count, house_id, created_at, operation)
  VALUES (OLD.user_id, OLD.recipe_id, OLD.vote_count, OLD.house_id, OLD.created_at, 'D');
  RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER userRecipes_after_delete
AFTER DELETE ON userRecipes
FOR EACH ROW
EXECUTE FUNCTION userRecipes_delete_trigger();


-- Votes table (1:N) users
CREATE TABLE votesTable (
  vote_id SERIAL PRIMARY KEY,
  user_id NUMERIC(40,0) REFERENCES users(user_id),
  recipe_id VARCHAR(255),
  vote_type VARCHAR(5),
  created_at TIMESTAMP DEFAULT NOW()
);
