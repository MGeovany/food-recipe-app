import React, { useEffect, useMemo, useState } from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import { View, Text, Image } from "react-native";
import { CardItem } from "./CardItem";
import { getRecipesInfo } from "../api/getRecipes";
import Loading from "./Loading";

export const SavedList = ({ navigation, recipeList, addedToPoll }) => {
  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      setIsLoading(true);

      try {
        const recipesInfo = await getRecipesInfo(recipeList);
        setDataList(recipesInfo);
      } catch (error) {
        console.error("Error fetching saved recipes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSavedRecipes();
  }, [recipeList]);

  return (
    <View>
      {!isLoading ? (
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
      ) : (
        <Loading />
      )}
    </View>
  );
};
