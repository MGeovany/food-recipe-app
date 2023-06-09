import axios from "axios";

export const addNewRecipe = async (
  user_id,
  recipe_id,
  vote_count,
  house_id
) => {
  const options = {
    method: "POST",
    url: "http://localhost:4000/api/v1/poll",
    headers: { "Content-Type": "application/json" },
    data: { user_id, recipe_id, vote_count, house_id },
  };

  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getAllRecipes = async (houseId) => {
  const options = {
    method: "GET",
    url: `http://localhost:4000/api/v1/poll/${houseId}`,
  };

  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteRecipe = async (userId, recipeId) => {
  const options = {
    method: "DELETE",
    url: `http://localhost:4000/api/v1/poll/${recipeId}`,
    params: { userId },
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
  }
};
