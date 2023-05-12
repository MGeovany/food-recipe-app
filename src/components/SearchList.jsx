import React, { useMemo, useState } from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import { View, Text, Image } from "react-native";
import { styles } from "../styles";

export const SearchList = () => {
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
        renderItem={CardItem}
      />
    </View>
  );
};

const CardItem = (items) => {
  const { item } = items;
  const randomBool = useMemo(() => Math.random() < 0.5, []);

  return (
    <View key={items.id} style={{ marginTop: 12, flex: 1 }}>
      <Image
        style={{
          height: randomBool ? 150 : 280,
          alignSelf: "stretch",
          borderRadius: "15px",
          margin: "0.5rem",
        }}
        resizeMode="cover"
        source={item.imgUrl}
      />
      <View
        style={{
          paddingLeft: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        <Text style={styles.descTitle}>{item.title}</Text>
        <Text
          style={{
            fontFamily: "poppins-regular",
            color: "#BBBABD",
            fontWeight: "bold",
          }}
        >
          {item.desc || `By Oren Diligan`}
        </Text>
      </View>
    </View>
  );
};
