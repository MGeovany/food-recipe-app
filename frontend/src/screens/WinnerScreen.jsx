import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { PRIMARY_COLOR } from "../utils/colors";
import { getRecipeInfo } from "../api/getRecipes";
import { styles } from "../styles";
import { CardItem } from "../components/CardItem";

export const WinnerScreen = ({ route, navigation }) => {
  const { winner, vote_count, recipeImg } = route.params;
  const [recipeInfo, setRecipeInfo] = useState(null);

  useEffect(() => {
    const fetchRecipeInfo = async () => {
      const response = await getRecipeInfo(winner);
      setRecipeInfo(response);
    };
    fetchRecipeInfo();
  }, []);

  return (
    <View
      style={{
        paddingVertical: "7rem",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{}}>
        <Text
          style={{
            fontFamily: "poppins-regular",
            fontWeight: 900,
            fontSize: "24px",
            color: "#444444",
          }}
        >
          Hoy Vamos
        </Text>
      </View>

      <Text
        style={{
          fontFamily: "poppins-regular",
          fontWeight: 900,
          fontSize: "40px",

          color: "#444444",
        }}
      >
        <Text>a</Text>
        <Text
          style={{
            color: PRIMARY_COLOR,
          }}
        >
          {" "}
          comer...
        </Text>
      </Text>

      <View>
        <Text
          style={{
            fontSize: "60px",
            marginTop: "1rem",
          }}
        >
          🎉
        </Text>
      </View>

      <CardItem item={recipeInfo} navigation={navigation} winner={true} />
    </View>
  );
};
