import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR } from "../utils/colors";

export const ReceiptDetails = () => {
  return (
    <View
      style={{
        padding: "1.5rem",
        paddingTop: "0rem",
        backgroundColor: "white",
      }}
    >
      <View style={styles.blockP}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.mainTitle}>Salmon Sushi</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{
                width: "25px",
                height: "25px",
                color: SECONDARY_TEXT_COLOR,
              }}
              source={require("../assets/icons/timerGray.png")}
            />
            <Text style={styles.contentText}>48 mins</Text>
          </View>
        </View>
        <Text style={styles.contentText}>
          El nigiri sushi son pequeñas pelotas ovaladas de arroz, cubiertas con
          un trozo de pescado y un poco de wasabi.
        </Text>
      </View>
      <View style={styles.blockP}>
        <Text style={styles.secondaryTitle}>Ingredientes</Text>
        <FlatList
          data={[
            { key: "Arroz" },
            { key: "Carne" },
            { key: "Pescado" },
            { key: "Salmon" },
            { key: "Relleno" },
            { key: "Condimentos" },
          ]}
          renderItem={({ item }) => (
            <Text style={styles.contentText}>{item.key}</Text>
          )}
        />
      </View>
      <View style={styles.blockP}>
        <Text style={styles.secondaryTitle}>Instrucciones</Text>

        <Text style={styles.contentText}>
          No es recomendable ahogar el sushi en la soya; esta salsa tiene muchos
          toques de sal y es bastante fuerte por lo que ocultará el sabor del
          pescado y del arroz. Si el chef está cerca y puede observar la comida,
          será mejor evitarlo porque esto podría parecer un intento por ocultar
          el sabor y ser ofensivo a la labor culinaria del maestro del sushi.
        </Text>
      </View>
      <View style={styles.blockP}>
        <Text style={styles.secondaryTitle}>Paso a Paso</Text>
        <Text style={styles.contentText}>
          El dilema de los palillos Si se trata de una bandeja compartida, lo
          correcto es darle la vuelta a los palillos a la hora de servirse
          alguna pieza; esto evitará que la parte usada toque alguna de las
          demás piezas.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainTitle: {
    fontFamily: "poppins-regular",
    fontWeight: "900",
    fontSize: "24px",

    color: PRIMARY_TEXT_COLOR,
  },
  secondaryTitle: {
    fontFamily: "poppins-regular",
    fontWeight: "900",
    fontSize: "18px",
  },

  contentText: {
    fontFamily: "poppins-regular",
    fontSize: "16px",
    color: SECONDARY_TEXT_COLOR,
    lineHeight: "2",
  },
  blockP: {
    paddingBottom: "1.5rem",
  },
});
