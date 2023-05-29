import React, { useState } from "react";
import { styles } from "../styles";
import { View, Text, Image, Pressable } from "react-native";

export const CardItem = ({ items, randomBool }) => {
  const { item } = items;
  const [addedState, setAddedState] = useState(false);

  const handleAddReceipt = () => {
    setAddedState(true);
    setTimeout(() => {
      setAddedState(false);
    }, 1000);
  };

  return (
    <View key={items.id} style={{ marginTop: 12, flex: 1 }}>
      <View
        style={{
          height: randomBool ? 150 : 280,
          position: "relative",
          padding: "0.2rem",
        }}
      >
        <Image
          style={{
            height: "100%",
            alignSelf: "stretch",
            borderRadius: 15,
            margin: 0.5,
          }}
          resizeMode="cover"
          source={item.imgUrl}
        />
        <Pressable onPress={handleAddReceipt}>
          <Image
            source={require(`../assets/icons/${
              addedState ? "done" : "add"
            }.png`)}
            style={{
              height: 32,
              width: 32,
              position: "absolute",
              bottom: 0,
              right: 0,
              margin: 8,
            }}
          />
        </Pressable>
      </View>

      <View
        style={{
          paddingLeft: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        <Text style={styles.descTitle}>{item.title}</Text>
        <Text
          style={{
            fontFamily: "poppins-regular",
            color: "#BBBABD",
            fontWeight: "bold",
          }}
        >
          {item.desc || `By Oren Diligan`}
        </Text>
      </View>
    </View>
  );
};