import React, { useRef } from "react";
import Carousel from "react-native-reanimated-carousel";
import {
  BREAKFAST_CTG,
  DESSERT_CTG,
  DINNER_CTG,
  LUNCH_CTG,
  VEGGIES_CTG,
} from "../utils/constants";
import { Pressable, View, Text } from "react-native";

export const SimilarReceipts = () => {
  const ref = useRef(null);

  const categories = {
    activeIndex: 0,
    categorieItems: [
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
      <Pressable>
        <View
          style={{
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
      data={categories.categorieItems}
      renderItem={renderItem}
    />
  );
};
