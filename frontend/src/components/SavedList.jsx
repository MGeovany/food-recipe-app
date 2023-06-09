import React, { useEffect, useMemo, useState } from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import { View, Text, Image } from "react-native";
import { CardItem } from "./CardItem";
import { getRecipesInfo } from "../api/getRecipes";

export const SavedList = ({ navigation, recipeList }) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchSimilarRecipes = async () => {
      const recipesInfo = await getRecipesInfo(recipeList);
      setDataList(recipesInfo);
    };

    fetchSimilarRecipes();
  }, [recipeList]);

  return (
    <View>
      <MasonryList
        contentContainerStyle={{
          alignSelf: "stretch",
        }}
        numColumns={2}
        data={dataList}
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
