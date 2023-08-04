import React from "react";
import { Image, Pressable } from "react-native";
import { saveRecipe } from "../api/favorites";
import { useAppContext } from "../context/Auth";
import { useToast } from "react-native-toast-notifications";

export const SaveButton = ({ recipeId }) => {
  const { userInfo } = useAppContext();
  const toast = useToast();

  const handleSaveRecipe = async () => {
    const response = await saveRecipe(userInfo.id, recipeId);
    console.log(
      "Recipe successfully added to favorites list",
      response?.status
    );

    toast.show("New recipe saved successfully", {
      type: "normal",
      placement: "top",
      duration: 4000,
      offset: 30,
      animationType: "slide-in",
    });
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
