import React, { useEffect, useMemo, useState } from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import { View, Text, Image } from "react-native";
import { CardItem } from "./CardItem";
import { getRecipesInfo } from "../api/getRecipes";

export const SavedList = ({ navigation, recipeList, addedToPoll }) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      const recipesInfo = await getRecipesInfo(recipeList);
      setDataList(recipesInfo);
    };

    fetchSavedRecipes();
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
            saved={true}
            addedToPoll={addedToPoll ?? false}
          />
        )}
      />
    </View>
  );
};
