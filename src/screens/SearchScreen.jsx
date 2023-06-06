import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "../styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { Searchbar } from "react-native-paper";
import { SearchList } from "../components/SearchList";
import { getRandomRecipe } from "../api/Recipes";
import { RecommendationList } from "../components/RecommendationList";

export const SearchScreen = ({ navigation }) => {
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
            marginBottom: "2rem",
          }}
        >
          <Text
            style={{
              color: "#5DBD21",
              fontFamily: "poppins-regular",
              fontWeight: "700",
              fontSize: "22px",
            }}
          >
            Busca
          </Text>
          <Text style={styles.pageTitle}>tus recetas preferidas</Text>
        </View>
        <View>
          <Searchbar
            style={{
              backgroundColor: "#F6F7FB",
              marginBottom: "2rem",
            }}
            inputStyle={{ fontFamily: "poppins-regular", color: "#BBBABD" }}
            placeholder="Buscar"
          />
        </View>
        <View>
          {/*  <SearchList navigation={navigation} data={dataList} /> */}
          <RecommendationList
            category={category}
            navigation={navigation}
            recipes={dataList}
          />
        </View>
      </View>
    </ScrollView>
  );
};
