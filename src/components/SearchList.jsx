import React, { useMemo, useState } from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import { View, Text, Image } from "react-native";
import { styles } from "../styles";
import { CardItem } from "./CardItem";

export const SearchList = ({ navigation }) => {
  const [isLoadingNext, setIsLoadingNext] = useState(false);
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
    <View>
      <MasonryList
        contentContainerStyle={{
          alignSelf: "stretch",
        }}
        numColumns={2}
        data={images}
        renderItem={({ item }) => (
          <CardItem item={item} navigation={navigation} addBtn={true} />
        )}
      />
    </View>
  );
};
