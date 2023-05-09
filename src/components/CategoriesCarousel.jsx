import React, { useRef } from "react";
import { View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Text } from "react-native-web";

export const CategoriesCarousel = () => {
  const ref = useRef(null);

  const categories = {
    activeIndex: 0,
    categorieItems: [
      {
        icon: "🥞",
        text: "Desayunos",
      },
      {
        icon: "🍝",
        text: "Almuerzo",
      },
      {
        icon: "🍕",
        text: "Cena",
      },
      {
        icon: "🍨",
        text: "Postre",
      },
      {
        icon: "🥑",
        text: "Veggies",
      },
    ],
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

const renderItem = ({ item }) => {
  return (
    <View
      style={{
        backgroundColor: "#F7F7F7",
        borderRadius: 10,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "150px",
        height: "100px",
        padding: 10,
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
  );
};
