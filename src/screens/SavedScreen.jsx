import React from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "../styles";

export const SavedScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.styledContainer}>
        <View style={styles.pageTitleContainer}>
          <Text style={styles.pageTitle}>Recetas</Text>
          <Text
            style={{
              color: "#5DBD21",
              fontFamily: "poppins-regular",
              fontWeight: "700",
              fontSize: "22px",
            }}
          >
            &nbsp;Guardadas
          </Text>
          <Text style={styles.pageTitle}>para mas tarde</Text>
        </View>
      </View>
    </ScrollView>
  );
};
