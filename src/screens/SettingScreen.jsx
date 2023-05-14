import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "../styles";
import { useAppContext } from "../context/Auth";
import { EditProfileForm } from "../components/EditProfileForm";

export const SettingScreen = ({ navigation }) => {
  const { userInfo } = useAppContext();

  return (
    <View style={styles.styledContainer}>
      <View style={styles.pageTitleContainer}></View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Image
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50px",
          }}
          source={userInfo?.picture || require("../../assets/person.jpeg")}
        />
        <View style={{ flexDirection: "row", marginVertical: "1rem" }}>
          <Text style={styles.pageTitle}>Editar mi </Text>
          <Text
            style={{
              color: "#5DBD21",
              fontFamily: "poppins-regular",
              fontWeight: "800",
              fontSize: "22px",
            }}
          >
            Cuenta
          </Text>
        </View>
        <EditProfileForm />
      </View>
    </View>
  );
};
