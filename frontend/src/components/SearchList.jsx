import React from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import { View } from "react-native";
import { CardItem } from "./CardItem";

export const SearchList = ({ navigation, data }) => {
  return (
    <View>
      <MasonryList
        contentContainerStyle={{
          alignSelf: "stretch",
        }}
        numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <CardItem
            item={item}
            navigation={navigation}
            addBtn={true}
            randomHeight={true}
          />
        )}
      />
    </View>
  );
};
