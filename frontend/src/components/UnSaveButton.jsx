import React from "react";
import { Image, Pressable } from "react-native";
import { deleteSavedRecipe } from "../api/saveData";

export const UnSaveButton = ({ recipeId }) => {
  const handleRemoveSaveRecipe = async () => {
    const response = await deleteSavedRecipe("1", recipeId);
    console.log(
      "Recipe successfully removed from favorites list",
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
      onPress={handleRemoveSaveRecipe}
    >
      <Image
        source={require("../assets/icons/remove.png")}
        style={{
          height: "30px",
          width: "30px",
        }}
      />
    </Pressable>
  );
};
