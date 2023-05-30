import React from "react";
import { HomeScreen } from "../screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsScreen } from "../screens/DetailsScreen";

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          tabBarStyle: { display: "none" },
        }}
      />
    </HomeStack.Navigator>
  );
};
