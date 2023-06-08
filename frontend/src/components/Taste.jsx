import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { SECONDARY_TEXT_COLOR } from "../utils/colors";
import { getTasteById } from "../api/getRecipes";

export const Taste = ({ tasteId }) => {
  const [tasteData, setTasteData] = useState([]);

  useEffect(() => {
    const fetchTasteData = async () => {
      const data = await getTasteById(tasteId);
      setTasteData(data);
    };
    fetchTasteData();
  }, [tasteId]);

  const tasteCtg = [
    {
      name: "Dulce",
      img: "sweet",
      points: tasteData?.sweetness,
    },
    {
      name: "Salado",
      img: "salt",
      points: tasteData?.saltiness,
    },
    {
      name: "Amargo",
      img: "sour",
      points: tasteData?.bitterness,
    },
    {
      name: "Sabroso",
      img: "tasty",
      points: tasteData?.savoriness,
    },
    {
      name: "Gordura",
      img: "fat",
      points: tasteData?.fattiness,
    },
    {
      name: "Picante",
      img: "spicy",
      points: tasteData?.spiciness,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {tasteCtg.slice(0, 3).map((item, index) => (
          <View key={index} style={styles.item}>
            <View>
              <Text style={styles.tasteText}>{item.name}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginVertical: "0.5rem",
              }}
            >
              <Image
                source={require(`../assets/icons/taste/${item.img}.png`)}
                style={styles.tasteImg}
              />
              <Text style={styles.tasteText}>{item.points}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.row}>
        {tasteCtg.slice(3, 6).map((item, index) => (
          <View key={index} style={styles.item}>
            <View>
              <Text style={styles.tasteText}>{item.name}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginVertical: "0.5rem",
              }}
            >
              <Image
                source={require(`../assets/icons/taste/${item.img}.png`)}
                style={styles.tasteImg}
              />
              <Text style={styles.tasteText}>{item.points}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  tasteText: {
    fontFamily: "poppins-regular",
    fontStyle: "italic",
    fontWeight: "900",
    fontSize: "14px",
    alignItems: "center",
    justifyContent: "center",
    color: SECONDARY_TEXT_COLOR,
  },

  tasteImg: {
    height: "23px",
    width: "23px",
    alignSelf: "stretch",
    marginRight: "0.5rem",
  },

  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    padding: "2rem",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignContent: "flex-start",
    width: "100%",
    paddingHorizontal: "1rem",
    justifyContent: "space-between",
  },
  item: {
    flex: 1,
    padding: "0.5rem",
    marginHorizontal: "0.5rem",
  },
});
