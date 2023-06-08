import React, { useMemo, useState } from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import { View, Text, Image } from "react-native";
import { styles } from "../styles";
import { CardItem } from "./CardItem";

export const SearchList = ({ navigation, data }) => {
  const [isLoadingNext, setIsLoadingNext] = useState(false);

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
