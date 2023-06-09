import axios from "axios";

export const getSavedRecipes = async (userId) => {
  const options = {
    method: "GET",
    url: "http://localhost:4000/api/v1/favorites",
    params: { userId },
  };

  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteSavedRecipe = async (userId, recipeId) => {
  const options = {
    method: "DELETE",
    url: `http://localhost:4000/api/v1/favorites/${recipeId}`,
    params: { userId },
  };

  try {
    const response = await axios.request(options);
    return response;
  } catch (e) {
    console.error(e);
  }
};

export const saveRecipe = async (userId, recipeId) => {
  const options = {
    method: "POST",
    url: "http://localhost:4000/api/v1/favorites",
    params: { userId },
    data: { recipeId },
  };

  try {
    const response = await axios.request(options);
    return response;
  } catch (e) {
    console.error(e);
  }
};
