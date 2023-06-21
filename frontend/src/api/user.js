import axios from "axios";

export const createUser = async (userId, userName) => {
  const options = {
    method: "POST",
    url: "http://localhost:4000/api/v1/user",
    headers: { "Content-Type": "application/json" },
    data: { user_id: userId, user_name: userName },
  };

  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.log(error);
  }
};
