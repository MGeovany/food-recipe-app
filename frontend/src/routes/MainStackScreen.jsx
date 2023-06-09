import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Main } from "../screens/Main";
import { WinnerScreen } from "../screens/WinnerScreen";

const MainStack = createNativeStackNavigator();

export const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen
        name="WinnerScreen"
        component={WinnerScreen}
        options={{
          tabBarStyle: { display: "none" },
        }}
      />
      <MainStack.Screen name="MainScreen" component={Main} />
    </MainStack.Navigator>
  );
};
