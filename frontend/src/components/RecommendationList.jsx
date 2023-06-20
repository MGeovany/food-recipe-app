import React, { useMemo, useState } from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import { View, Text, Image, Pressable } from "react-native";
import { CardItem } from "./CardItem";

export const RecommendationList = ({ navigation, recipes }) => {
  return (
    <View>
      <MasonryList
        contentContainerStyle={{
          alignSelf: "stretch",
        }}
        numColumns={2}
        data={recipes}
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
