import React from "react";
import { Image, Pressable } from "react-native";
import { saveRecipe } from "../api/favorites";
import { useAppContext } from "../context/Auth";

export const SaveButton = ({ recipeId }) => {
  const { userInfo } = useAppContext();

  const handleSaveRecipe = async () => {
    const response = await saveRecipe(userInfo.id, recipeId);
    console.log(
      "Recipe successfully added to favorites list",
      response?.status
    );
  };
  return (
    <Pressable
      style={{
        backgroundColor: "white",
        borderRadius: 50,
        width: "40px",
        height: "40px",
        position: "absolute",
        top: 15,
        right: 15,
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={handleSaveRecipe}
    >
      <Image
        source={require("../assets/icons/love.png")}
        style={{
          height: "30px",
          width: "30px",
        }}
      />
    </Pressable>
  );
};
