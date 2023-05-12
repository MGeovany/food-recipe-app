import React from "react";
import { HomeScreen } from "../screens/HomeScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { SettingScreen } from "../screens/SettingScreen";
import { SavedScreen } from "../screens/SavedScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

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
        <Icon name={iconName} size={30} color={focused ? "#444" : "#d5d5d9"} />
        <Text style={{ color: focused ? "#444" : "#d5d5d9" }}>{title}</Text>
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
          borderTopWidth: 0,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        options={tabScreenOptions("home", "Home")}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={tabScreenOptions("search", "Search")}
      />
      <Tab.Screen
        name="Bookmarks"
        component={SettingScreen}
        options={tabScreenOptions("bookmark", "Saved")}
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
