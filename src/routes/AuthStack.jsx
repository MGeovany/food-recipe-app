import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LandingScreen } from "../screens/LandingScreen";
import { SignInScreen } from "../screens/SignInScreen";
const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Landing" component={LandingScreen} />
    </Stack.Navigator>
  );
};
