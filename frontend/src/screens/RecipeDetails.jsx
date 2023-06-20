import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR } from "../utils/colors";
import { getRecipeInfo } from "../api/getRecipes";
import { translate } from "../api/translate";

export const RecipeDetails = ({ recipeId }) => {
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [translatedDetails, setTranslatedDetails] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const data = await getRecipeInfo(recipeId);
      setRecipeDetails(data);
    };
    fetchRecipeDetails();
  }, [recipeId]);

  const translateText = async (text) => {
    const translatedText = await translate(text);
    return translatedText;
  };

  const translateRecipeDetails = async () => {
    if (recipeDetails) {
      const translatedTitle = await translateText(recipeDetails?.title);
      const translatedSummary = await translateText(recipeDetails?.summary);
      const translatedInstructions = await translateText(
        recipeDetails?.instructions
      );

      let translatedIngredients = [];
      let translatedStepByStep = [];

      if (Array.isArray(recipeDetails?.extendedIngredients)) {
        for (const ingredient of recipeDetails?.extendedIngredients) {
          const translatedIngredient = await translateText(
            ingredient?.original
          );

          translatedIngredients?.push(translatedIngredient);
        }
      }

      if (Array.isArray(recipeDetails.analyzedInstructions?.[0]?.steps)) {
        for (const instructions of recipeDetails.analyzedInstructions?.[0]
          ?.steps) {
          const translatedInstructions = await translateText(
            instructions?.step
          );
          translatedStepByStep?.push(translatedInstructions);
        }
      }

      setTranslatedDetails({
        ...recipeDetails,
        title: translatedTitle,
        summary: translatedSummary,
        instructions: translatedInstructions,
        ingredients: translatedIngredients,
        stepByStep: translatedStepByStep,
      });
    }
  };

  useEffect(() => {
    translateRecipeDetails();
  }, [recipeDetails]);

  return (
    <View
      style={{
        padding: "1.5rem",
        paddingTop: "0rem",
        backgroundColor: "white",
      }}
    >
      <View style={styles.blockP}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.mainTitle}>{translatedDetails?.title}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{
                width: "25px",
                height: "25px",
                color: SECONDARY_TEXT_COLOR,
              }}
              source={require("../assets/icons/timerGray.png")}
            />
            <Text style={styles.contentText}>
              {translatedDetails?.readyInMinutes} mins
            </Text>
          </View>
        </View>
        <Text style={styles.contentText}>
          {translatedDetails?.summary?.replace(/<[^>]+>/g, "")}
        </Text>
      </View>
      <View style={styles.blockP}>
        <Text style={styles.secondaryTitle}>Ingredientes</Text>
        <FlatList
          data={translatedDetails?.ingredients}
          renderItem={({ item, index }) => (
            <Text key={index} style={styles.contentText}>
              {"\u2022"} {item?.replace(/<[^>]+>/g, "")}
            </Text>
          )}
        />
      </View>
      <View style={styles.blockP}>
        <Text style={styles.secondaryTitle}>Instrucciones</Text>

        <Text style={styles.contentText}>
          {translatedDetails?.instructions?.replace(/<[^>]+>/g, "")}
        </Text>
      </View>
      <View style={styles.blockP}>
        <Text style={styles.secondaryTitle}>Paso a Paso</Text>
        <Text style={styles.contentText}>
          <FlatList
            data={translatedDetails?.stepByStep}
            renderItem={({ item, index }) => (
              <Text key={index} style={styles.contentText}>
                <Text style={{ fontWeight: 900 }}> Paso {index + 1}: </Text>
                {item}
              </Text>
            )}
          />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainTitle: {
    fontFamily: "poppins-regular",
    fontWeight: "900",
    fontSize: "24px",

    color: PRIMARY_TEXT_COLOR,
  },
  secondaryTitle: {
    fontFamily: "poppins-regular",
    fontWeight: "900",
    fontSize: "18px",
  },

  contentText: {
    fontFamily: "poppins-regular",
    fontSize: "16px",
    color: SECONDARY_TEXT_COLOR,
    lineHeight: "2",
  },
  blockP: {
    paddingBottom: "1.5rem",
  },
});
