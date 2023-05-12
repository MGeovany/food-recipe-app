import React from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "../styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { Searchbar } from "react-native-paper";
import { SearchList } from "../components/SearchList";

export const SearchScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.styledContainer}>
        <View
          style={{
            marginBottom: "2rem",
          }}
        >
          <Text
            style={{
              color: "#5DBD21",
              fontFamily: "poppins-regular",
              fontWeight: "700",
              fontSize: "22px",
            }}
          >
            Busca
          </Text>
          <Text style={styles.pageTitle}>tus recetas preferidas</Text>
        </View>
        <View>
          <Searchbar
            style={{
              backgroundColor: "#F6F7FB",
              marginBottom: "2rem",
            }}
            inputStyle={{ fontFamily: "poppins-regular", color: "#BBBABD" }}
            placeholder="Buscar"
          />
        </View>
        <View>
          <SearchList />
        </View>
      </View>
    </ScrollView>
  );
};
