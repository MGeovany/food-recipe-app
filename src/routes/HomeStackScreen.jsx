import React from "react";

import { HomeScreen } from "../screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen = () => {
  return (
    <>
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      </HomeStack.Navigator>
    </>
  );
};
