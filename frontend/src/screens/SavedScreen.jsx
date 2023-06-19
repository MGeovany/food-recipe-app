import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "../styles";
import { SavedList } from "../components/SavedList";
import { getSavedRecipes } from "../api/favorites";

export const SavedScreen = ({ navigation }) => {
  const [dataList, setDataList] = useState([]);

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
  }, [navigation]);

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
          <Text style={styles.pageTitle}>para más tarde</Text>
        </View>
        <SavedList navigation={navigation} recipeList={dataList} />
      </View>
    </ScrollView>
  );
};
