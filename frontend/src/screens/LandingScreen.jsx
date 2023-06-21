import React from "react";
import { Image, Text, View, Button, Pressable } from "react-native";
import { mainTextBtn, styles } from "../styles";

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
            <Text style={styles.titleLogo}>¿Que vámos a comer hoy?</Text>
            <Text style={styles.descText}>
              <Text>
                Dinos las preferencias de tu familia y te serviremos deliciosas
                ideas para tu mesa
              </Text>
            </Text>

            <Pressable
              onPress={() => navigation.navigate("SignIn")}
              style={{ alignItems: "center" }}
            >
              <View style={styles.mainBtn}>
                <Text style={mainTextBtn}>Empecemos</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};
