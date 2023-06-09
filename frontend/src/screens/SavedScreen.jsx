import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "../styles";
import { SavedList } from "../components/SavedList";
import { RecommendationList } from "../components/RecommendationList";
import { getRandomRecipe } from "../api/getRecipes";
import { getSavedRecipes } from "../api/saveData";

export const SavedScreen = ({ navigation }) => {
  const [dataList, setDataList] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      const response = await getSavedRecipes(1);
      const inputArray = response.data;
      const transformedArray = inputArray.map((obj) => {
        return {
          id: obj.recipe_id,
        };
      });

      setDataList(transformedArray);
    };
    fetchSavedRecipes();
  }, [category]);

  return (
    <ScrollView>
      <View style={styles.styledContainer}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Text style={styles.pageTitle}>Recetas</Text>
          <Text
            style={{
              color: "#5DBD21",
              fontFamily: "poppins-regular",
              fontWeight: "700",
              fontSize: "22px",
            }}
          >
            &nbsp;Guardadas
          </Text>
          <Text style={styles.pageTitle}>para mas tarde</Text>
        </View>
        <SavedList navigation={navigation} recipeList={dataList} />
      </View>
    </ScrollView>
  );
};
