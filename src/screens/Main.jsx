import React from "react";
import { Image, Pressable, ScrollView, Text } from "react-native";
import { View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import { styles } from "../styles";

export const Main = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      <View style={styles.styledContainer}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          <Text
            style={{
              fontFamily: "poppins-regular",
              fontWeight: 900,
              fontSize: "24px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              color: "#333333",
            }}
          >
            Que vamos
          </Text>
          <Text
            style={{
              fontFamily: "poppins-regular",
              fontWeight: 900,
              fontSize: "30px",
              color: "#333333",
            }}
          >
            A
            <Text
              style={{
                color: "#5DBD21",
              }}
            >
              {" "}
              COMER{" "}
            </Text>
            HOY?
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            marginTop: "10rem",
          }}
        >
          <Text
            style={{
              color: "#B1B6BB",
              fontFamily: "poppins-regular",
              fontWeight: 900,
              fontSize: "20px",
            }}
          >
            Inicia sugeriendo recetas con el icono
          </Text>
          <Pressable onPress={() => navigation.navigate("Search")}>
            <Image
              style={{
                width: "68px",
                height: "68px",
                marginTop: "2rem",
              }}
              source={require("../assets/icons/addGray.png")}
            />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};
