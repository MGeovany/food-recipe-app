import React from "react";
import { View, Text } from "react-native";
import { PRIMARY_COLOR } from "../utils/colors";

export const WinnerScreen = ({ route, navigation }) => {
  // const { winner, vote_count } = route.params;

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
            fontSize: "50px",
            marginTop: "1rem",
          }}
        >
          🎉
        </Text>
      </View>
    </View>
  );
};
