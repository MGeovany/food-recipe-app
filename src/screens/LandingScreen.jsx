import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Image, Text, View, Button } from "react-native";

export const LandingScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.styledContainer}>
        <View style={styles.innerContainer}>
          <Image
            style={styles.pageLogo}
            source={require("../../assets/daily-life.png")}
          />
          <View>
            <Text style={styles.pageTitle}>
              <Text>Ya no necesitas preguntarte nuevamente</Text>
            </Text>
            <Text style={styles.titleLogo}>Que vamos a comer hoy?</Text>
            <Text style={styles.descText}>
              <Text>
                Dinos las preferencias de tu familia y te serviremos deliciosas
                ideas para tu mesa
              </Text>
            </Text>
            <View style={styles.mainBtn}>
              <Button
                color={"#5DBD21"}
                title="Empezamos"
                onPress={() => navigation.navigate("SignInScreen")}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainBtn: {
    marginTop: "90px",

    fontFamily: "poppins-regular",
    fontWeight: "800",
    fontSize: "20px",
    borderRadius: 50,

    backgroundColor: "#5DBD21",
    padding: 10,
  },

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
    fontFamily: "poppins-regular",
    fontWeight: "700",
    fontSize: "22px",
    alignItems: "center",
    color: "#333333",
  },
  titleLogo: {
    fontFamily: "poppins-regular",
    fontWeight: "bold",
    fontSize: "26px",
    color: "#5DBD21",
  },

  descText: {
    fontFamily: "poppins-regular",
    color: "#BBBABD",
  },
});
