import React from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "../styles";

export const SettingScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.styledContainer}>
        <View style={styles.pageTitleContainer}>
          <Text style={styles.pageTitle}>Settings</Text>
        </View>
      </View>
    </ScrollView>
  );
};
