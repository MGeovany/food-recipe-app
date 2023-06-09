import React from "react";
import { View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Taste } from "../components/Taste";
import { RecipeDetails } from "./RecipeDetails";
import { SimilarReceipts } from "../components/SimilarReceipts";
import { BackButton } from "../components/BackButton";
import { SaveButton } from "../components/SaveButton";
import { UnSaveButton } from "../components/UnsaveButton";

export const DetailsScreen = ({ route, navigation }) => {
  const { recipeId, receiptImage, receiptSaved } = route.params;

  return (
    <ScrollView
      style={{
        paddingBottom: "10rem",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          position: "relative",
        }}
      >
        <BackButton navigation={navigation} />
        {!receiptSaved ? (
          <SaveButton navigation={navigation} recipeId={recipeId} />
        ) : (
          <UnSaveButton navigation={navigation} recipeId={recipeId} />
        )}
        <Image
          source={receiptImage}
          style={{
            height: "400px",
            width: "100%",
            alignSelf: "stretch",
          }}
          resizeMode="cover"
        />
      </View>
      <Taste tasteId={recipeId} />
      <RecipeDetails recipeId={recipeId} />
      <SimilarReceipts navigation={navigation} recipeId={recipeId} />
    </ScrollView>
  );
};
