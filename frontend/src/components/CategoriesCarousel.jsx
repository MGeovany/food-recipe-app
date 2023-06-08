import React, { useRef } from "react";
import { Pressable, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Text } from "react-native-web";
import {
  BREAKFAST_CTG,
  DESSERT_CTG,
  DINNER_CTG,
  LUNCH_CTG,
  VEGGIES_CTG,
} from "../utils/constants";
import { PRIMARY_COLOR, PRIMARY_TEXT_COLOR, SOFT_WHITE } from "../utils/colors";

export const CategoriesCarousel = ({ category, setCategory }) => {
  const ref = useRef(null);

  const handleClickCategory = (value) => {
    setCategory(value);
  };

  const categories = {
    activeIndex: 0,
    categoryItems: [
      {
        icon: "🥞",
        text: "Desayunos",
        value: BREAKFAST_CTG,
      },
      {
        icon: "🍝",
        text: "Almuerzo",
        value: LUNCH_CTG,
      },
      {
        icon: "🍕",
        text: "Cena",
        value: DINNER_CTG,
      },
      {
        icon: "🍨",
        text: "Postre",
        value: DESSERT_CTG,
      },
      {
        icon: "🥑",
        text: "Veggies",
        value: VEGGIES_CTG,
      },
    ],
  };

  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => handleClickCategory(item.value)}>
        <View
          style={{
            backgroundColor:
              item.value === category ? PRIMARY_COLOR : SOFT_WHITE,
            borderRadius: 10,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            width: "150px",
            height: "100px",
            padding: 6,
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          <Text style={{ fontSize: 50, fontFamily: "poppins-regular" }}>
            {item.icon}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: "poppins-regular",
              fontWeight: "bold",
              color: item.value === category ? "#FFF" : PRIMARY_TEXT_COLOR,
            }}
          >
            {item.text}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <Carousel
      style={{ width: "100%", marginBottom: "2rem" }}
      ref={ref}
      pagingEnabled={true}
      width={170}
      height={220 / 2}
      autoPlay={false}
      data={categories.categoryItems}
      renderItem={renderItem}
    />
  );
};
