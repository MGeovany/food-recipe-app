import React from "react";
import { SearchScreen } from "../screens/SearchScreen";
import { SettingScreen } from "../screens/SettingScreen";
import { SavedScreen } from "../screens/SavedScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text, Image } from "react-native";

import Icon from "react-native-vector-icons/EvilIcons";
import IconHome from "react-native-vector-icons/AntDesign";

import { Main } from "../screens/Main";
import { HomeStackScreen } from "./HomeStackScreen";
import { MainStackScreen } from "./MainStackScreen";

export const AppStack = () => {
  const Tab = createBottomTabNavigator();
  const tabScreenOptions = (iconName, title) => ({
    tabBarIcon: ({ focused }) => (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {iconName === "main" ? (
          <Image
            style={{
              width: "30px",
              height: "51px",
            }}
            source={require("../assets/icons/icon.png")}
          />
        ) : iconName === "home" ? (
          <IconHome
            name={iconName}
            size={30}
            color={focused ? "#5DBD21" : "#292d32"}
          />
        ) : (
          <Icon
            name={iconName}
            size={30}
            color={focused ? "#5DBD21" : "#292d32"}
          />
        )}

        <Text style={{ color: focused ? "#5DBD21" : "#292d32" }}>{title}</Text>
      </View>
    ),
  });

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,

        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 90,
          borderColor: "#d3dee87c",
          borderWidth: 3,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        options={tabScreenOptions("home", "Home")}
        name="Home"
        component={HomeStackScreen}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={tabScreenOptions("search", "Search")}
      />

      <Tab.Screen
        name="Main"
        component={MainStackScreen}
        options={tabScreenOptions("main", "")}
      />

      <Tab.Screen
        name="Bookmarks"
        component={SavedScreen}
        options={tabScreenOptions("heart", "Liked")}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={tabScreenOptions("gear", "Settings")}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#d3f2cd",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
