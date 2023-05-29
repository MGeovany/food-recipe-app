import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../styles";
import { useAppContext } from "../context/Auth";
import { Searchbar } from "react-native-paper";
import { CategoriesCarousel } from "../components/CategoriesCarousel";
import { RecomendationList } from "../components/RecomendationList";
import { ScrollView } from "react-native";
import {
  BREAKFAST_CTG,
  DESSERT_CTG,
  DINNER_CTG,
  LUNCH_CTG,
  VEGGIES_CTG,
} from "../utils/constants";

export const HomeScreen = ({ navigation }) => {
  const { userInfo } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [categorie, setCategorie] = useState("Breakfast");

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    console.log(searchQuery);
  };

  const categoryTitles = {
    [BREAKFAST_CTG]: "Desayuno",
    [LUNCH_CTG]: "Almuerzo",
    [DINNER_CTG]: "Cena",
    [DESSERT_CTG]: "Postre",
    [VEGGIES_CTG]: "Veggies",
  };

  const categoryTitle = categoryTitles[categorie];

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
        <CategoriesCarousel setCategorie={setCategorie} categorie={categorie} />

        {categorie === null || !categoryTitle ? null : (
          <View>
            <Text style={styles.mainTitle}>
              {categoryTitle
                ? `Recetas ${categoryTitle} populares`
                : "Recomendacion del dia"}
            </Text>
            <RecomendationList categorie={categorie} />
          </View>
        )}
      </View>
    </ScrollView>
  );
};
