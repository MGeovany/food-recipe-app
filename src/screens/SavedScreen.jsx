import React from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "../styles";
import { SavedList } from "../components/SavedList";
import Icon from "react-native-vector-icons/AntDesign";

export const SavedScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.styledContainer}>
        <Icon
          name="back"
          size={30}
          onPress={() => navigation.navigate("Home")}
          style={styles.iconBack}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
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
        <SavedList />
      </View>
    </ScrollView>
  );
};
