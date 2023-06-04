import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR } from "../utils/colors";
import { getRecipeInfo } from "../api/Recipes";

export const RecipeDetails = ({ recipeId }) => {
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const data = await getRecipeInfo(recipeId);
      console.log(data);

      setRecipeDetails(data);
    };
    fetchRecipeDetails();
  }, [recipeId]);
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
          <Text style={styles.mainTitle}>{recipeDetails?.title}</Text>
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
              {recipeDetails?.readyInMinutes} mins
            </Text>
          </View>
        </View>
        <Text style={styles.contentText}>
          {recipeDetails?.summary?.replace(/<[^>]+>/g, "")}
        </Text>
      </View>
      <View style={styles.blockP}>
        <Text style={styles.secondaryTitle}>Ingredientes</Text>
        <FlatList
          data={recipeDetails?.extendedIngredients}
          renderItem={({ item, index }) => (
            <Text key={index} style={styles.contentText}>
              {"\u2022"} {item.original?.replace(/<[^>]+>/g, "")}
            </Text>
          )}
        />
      </View>
      <View style={styles.blockP}>
        <Text style={styles.secondaryTitle}>Instrucciones</Text>

        <Text style={styles.contentText}>{recipeDetails?.instructions}</Text>
      </View>
      <View style={styles.blockP}>
        <Text style={styles.secondaryTitle}>Paso a Paso</Text>
        <Text style={styles.contentText}>
          <FlatList
            data={recipeDetails?.analyzedInstructions?.[0]?.steps}
            renderItem={({ item, index }) => (
              <Text key={index} style={styles.contentText}>
                <Text style={{ fontWeight: 900 }}> Paso {item.number}:</Text>
                {item.step}
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
