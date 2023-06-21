import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { loadFonts } from "../styles/expoFont";
import { useAppContext } from "../context/Auth";

export const Router = () => {
  const { authData } = useAppContext();
  // const authData = true;
  const [fontsLoaded] = useFonts({
    "poppins-regular": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

loadFonts();
