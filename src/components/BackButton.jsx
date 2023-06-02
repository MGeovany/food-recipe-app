import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

export const BackButton = ({ navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.goBack()}
      style={{
        backgroundColor: "white",
        borderRadius: 50,
        width: "40px",
        height: "40px",
        position: "absolute",
        top: 15,
        left: 15,
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/icons/back.png")}
        style={{
          height: "30px",
          width: "30px",
        }}
      />
    </Pressable>
  );
};
