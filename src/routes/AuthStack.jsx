import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen } from "../screens/SignInScreen";
import { LandingScreen } from "../screens/LandingScreen";
import { Text, View } from "react-native";
import { Auth } from "../context/Auth";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <View>
      <Text>HOME SCREEN</Text>
      <Auth />
    </View>
  );
};
