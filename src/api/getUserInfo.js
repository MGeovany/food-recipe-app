export const getUserInfo = async (token) => {
  try {
    const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const user = await response.json();
    return user;
  } catch (error) {
    console.log(error);
  }
};
