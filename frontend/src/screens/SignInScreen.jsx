import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {
  WEB_CLIENT_ID,
  IOS_CLIENT_ID,
  ANDROID_CLIENT_ID,
  WEB_SECRET_CLIENT,
} from "@env";
import { getUserInfo } from "../api/getUserInfo";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/AntDesign";
import { fbRoundedBtn, fbTextBtn, styles } from "../styles";
import { GoogleIcon } from "../assets/icons/";
import { useAppContext } from "../context/Auth";

export const SignInScreen = ({ navigation }) => {
  const { setAuthData, setUserInfo } = useAppContext();

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: WEB_SECRET_CLIENT,
    webClientId: WEB_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
  });

  useEffect(() => {
    WebBrowser.maybeCompleteAuthSession();
  }, []);

  useEffect(() => {
    if (response?.type === "success") {
      const token = response.authentication.accessToken;
      getUserInfo(token).then((response) => {
        setAuthData(true);
        setUserInfo(response);
      });
    }
  }, [response]);

  const handleGoogleSession = () => {
    promptAsync();
  };

  return (
    <>
      <View style={styles.styledContainer}>
        <Icon
          name="back"
          size={30}
          onPress={() => navigation.navigate("Landing")}
          style={styles.iconBack}
        />

        <View
          style={{
            marginBottom: "3rem",
          }}
        >
          <Text style={styles.pageTitle}>Hey,</Text>
          <Text style={styles.pageTitle}>Únete a nosotros</Text>
        </View>

        <View style={styles.roundedBtn}>
          <IconMaterial name="email" size={30} color="#444" />
          <Text style={styles.textBtn}>Iniciar sesión con mi correo</Text>
        </View>

        <View style={{ marginVertical: "3rem", alignItems: "center" }}>
          <Text style={styles.descText}>O también puedes</Text>
        </View>

        <Pressable onPress={handleGoogleSession} disabled={!request}>
          <View style={{ marginBottom: "2rem" }}>
            <View style={styles.roundedBtn}>
              <GoogleIcon height={30} width={30} />

              <Text style={styles.textBtn}>Iniciar sesión con Google</Text>
            </View>
          </View>
        </Pressable>

        <View style={fbRoundedBtn}>
          <Icon name="facebook-square" size={30} color="#fff" />
          <Text style={fbTextBtn}>Iniciar sesión con Facebook</Text>
        </View>

        <View style={{ marginVertical: "3rem", alignItems: "center" }}>
          <Text style={styles.descText}>¿Aún no tienes cuenta?</Text>
          <Text
            style={{
              fontFamily: "poppins-regular",
              fontWeight: "bold",
            }}
          >
            Crear una cuenta
          </Text>
        </View>
      </View>
    </>
  );
};
