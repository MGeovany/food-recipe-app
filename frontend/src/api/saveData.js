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
