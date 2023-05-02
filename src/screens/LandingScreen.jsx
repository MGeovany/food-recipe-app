import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export const LandingScreen = () => {
  return (
    <>
      <View style={styles.styledContainer}>
        <View style={styles.innerContainer}>
          <Image
            style={styles.pageLogo}
            source={require("../../assets/daily-life.png")}
          />
          <Text style={{ fontFamily: "poppins-regular" }}>Ya no necesitas</Text>
          <Text>Preguntarte nuevamente</Text>
          <Text>Que vamos a comer hoy?</Text>
          <Text>Dinos las preferencias de tu familia y te</Text>
          <Text>serviremos deliciosas ideas para tu mesa</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pageLogo: {
    width: "100%",
    height: "300px",
    marginTop: "80px",
    alignItems: "center",
  },
  styledContainer: {
    flex: 1,
    padding: "25px",
    paddingTop: `${StatusBar + 10}px`,
  },
  innerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  pageTitle: {
    width: "338px",
    height: "66px",
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: "22px",
    lineHeight: "33px",
    display: "flex",
    alignItems: "center",

    color: "#333333",
  },
});
