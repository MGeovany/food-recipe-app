import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-native-reanimated-carousel";
import {
  BREAKFAST_CTG,
  DESSERT_CTG,
  DINNER_CTG,
  LUNCH_CTG,
  VEGGIES_CTG,
} from "../utils/constants";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { SECONDARY_TEXT_COLOR } from "../utils/colors";
import { CardItem } from "./CardItem";
import {
  getRecipeInfo,
  getRecipesInfo,
  getSimilarRecipes,
} from "../api/getRecipes";

export const SimilarReceipts = ({ navigation, recipeId }) => {
  const ref = useRef(null);
  const [similarRecipes, setSimilarRecipes] = useState([]);

  useEffect(() => {
    const fetchSimilarRecipes = async () => {
      const data = await getSimilarRecipes(recipeId);
      const recipesInfo = await getRecipesInfo(data);

      setSimilarRecipes(recipesInfo);
    };

    fetchSimilarRecipes();
  }, [recipeId]);

  const images = [
    {
      title: "Pizza",
      imgUrl:
        "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Burger",
      imgUrl:
        "https://images.pexels.com/photos/15818983/pexels-photo-15818983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Tacos",
      imgUrl:
        "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Sushi",
      imgUrl:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Salad",
      imgUrl:
        "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Pancakes",
      imgUrl:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Steak",
      imgUrl:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Seafood",
      imgUrl:
        "https://images.pexels.com/photos/725992/pexels-photo-725992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Noodles",
      imgUrl:
        "https://images.pexels.com/photos/17677/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Sandwich",
      imgUrl:
        "https://images.pexels.com/photos/5586268/pexels-photo-5586268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <View style={styles.blockP}>
      <Text style={styles.secondaryTitle}>Recetas similares</Text>
      <Carousel
        style={{ width: "100%" }}
        ref={ref}
        pagingEnabled={true}
        width={164}
        height={520 / 2}
        autoPlay={true}
        data={similarRecipes}
        renderItem={({ item }) => (
          <CardItem
            item={item}
            navigation={navigation}
            addBtn={true}
            randomHeight={false}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: "white",
    paddingHorizontal: "2rem",
  },
});
