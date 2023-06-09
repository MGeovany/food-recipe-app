import React from "react";
import { Image, Pressable } from "react-native";
import { deleteSavedRecipe } from "../api/favorites";

export const UnSaveButton = ({ recipeId, navigation }) => {
  const handleRemoveSavedRecipe = async () => {
    const response = await deleteSavedRecipe("1", recipeId);
    console.log(
      "Recipe successfully removed from favorites list",
      response?.status
    );

    navigation.navigate("Bookmarks");
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
      onPress={handleRemoveSavedRecipe}
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
