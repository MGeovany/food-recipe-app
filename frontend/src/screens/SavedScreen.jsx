import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "../styles";
import { SavedList } from "../components/SavedList";
import { RecommendationList } from "../components/RecommendationList";
import { getRandomRecipe } from "../api/Recipes";

export const SavedScreen = ({ navigation }) => {
  const [dataList, setDataList] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchRandomRecipes = async () => {
      const data = await getRandomRecipe(10, category);
      setDataList(data.recipes);
    };
    fetchRandomRecipes();
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
        {/*   <SavedList navigation={navigation} /> */}
        <RecommendationList
          category={category}
          navigation={navigation}
          recipes={dataList}
        />
      </View>
    </ScrollView>
  );
};