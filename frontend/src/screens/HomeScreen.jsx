import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../styles";
import { useAppContext } from "../context/Auth";
import { Searchbar } from "react-native-paper";
import { CategoriesCarousel } from "../components/CategoriesCarousel";
import { RecommendationList } from "../components/RecommendationList";
import { ScrollView } from "react-native";
import {
  BREAKFAST_CTG,
  DESSERT_CTG,
  DINNER_CTG,
  LUNCH_CTG,
  VEGGIES_CTG,
} from "../utils/constants";
import { getRandomRecipe, searchRecipe } from "../api/getRecipes";
import { SearchList } from "../components/SearchList";

export const HomeScreen = ({ navigation }) => {
  const { userInfo } = useAppContext();
  const [category, setCategory] = useState(null);
  const [dataList, setDataList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const categoryTitles = {
    [BREAKFAST_CTG]: "Desayuno",
    [LUNCH_CTG]: "Almuerzo",
    [DINNER_CTG]: "Cena",
    [DESSERT_CTG]: "Postre",
    [VEGGIES_CTG]: "Veggies",
  };

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await searchRecipe(searchQuery);
      setDataList(data.results);
    };
    const timeoutId = setTimeout(() => {
      fetchRecipe();
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  useEffect(() => {
    const fetchRandomRecipes = async () => {
      const data = await getRandomRecipe(10, category);
      setDataList(data?.recipes);
    };
    fetchRandomRecipes();
  }, [category]);

  useEffect(() => {
    setSearchQuery("");
  }, [category]);

  const categoryTitle = categoryTitles[category];

  return (
    <ScrollView>
      <View style={styles.styledContainer}>
        <View
          style={{
            marginBottom: "1rem",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={styles.pageTitle}>Hola,</Text>
            <Text style={styles.pageTitle}>
              {userInfo?.name || `M Geovany`}
            </Text>
          </View>
          <Image
            style={styles.profilePicture}
            source={userInfo?.picture || require("../../assets/person.jpeg")}
          />
        </View>
        <Text
          style={{
            fontFamily: "poppins-regular",
            color: "#BBBABD",
            fontSize: "16px",
            fontWeight: "bold",
            marginBottom: "2rem",
          }}
        >
          Que te gustaria preparar el dia de hoy?
        </Text>
        <Searchbar
          style={{
            backgroundColor: "#F6F7FB",
            marginBottom: "2rem",
          }}
          inputStyle={{ fontFamily: "poppins-regular", color: "#BBBABD" }}
          placeholder="Buscar"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />

        <Text style={styles.mainTitle}>Categories</Text>
        <CategoriesCarousel setCategory={setCategory} category={category} />

        {category === null && searchQuery === "" ? (
          <View>
            <Text style={styles.mainTitle}>Recomendacion del dia</Text>
          </View>
        ) : searchQuery !== "" ? (
          <View>
            <Text style={styles.mainTitle}>Resultados de busqueda</Text>
          </View>
        ) : (
          category !== null && (
            <View>
              <Text style={styles.mainTitle}>
                Recetas {categoryTitle} populares
              </Text>
            </View>
          )
        )}

        {searchQuery !== "" ? (
          <RecommendationList
            category={category}
            navigation={navigation}
            recipes={dataList}
          />
        ) : (
          <SearchList navigation={navigation} data={dataList} />
        )}
      </View>
    </ScrollView>
  );
};
