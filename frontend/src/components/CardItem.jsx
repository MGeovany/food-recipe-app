import React, { useMemo, useState } from "react";
import { styles } from "../styles";
import { View, Text, Image, Pressable } from "react-native";
import { addNewRecipe } from "../api/poll";

export const CardItem = ({
  item,
  addBtn,
  navigation,
  randomHeight,
  saved,
  addedToPoll,
}) => {
  const [addedState, setAddedState] = useState(false);
  const [removedState, setRemovedState] = useState(false);

  const randomBool = randomHeight
    ? useMemo(() => Math.random() < 0.5, [])
    : false;

  const handleAddReceipt = async () => {
    const response = await addNewRecipe(1, item.id, 1, 1);
    console.log("Added successfully", response.status);

    setAddedState(true);
    setTimeout(() => {
      setAddedState(false);
    }, 1000);
  };
  const handleRemoveReceipt = () => {
    setRemovedState(true);
    setTimeout(() => {
      setRemovedState(false);
    }, 1000);
  };

  const handleOpenReceipt = () => {
    navigation.navigate("DetailsScreen", {
      recipeId: item?.id,
      receiptName: item?.title,
      receiptImage: item?.image,
      receiptSaved: saved ?? false,
    });
  };

  return (
    <Pressable onPress={() => handleOpenReceipt()}>
      <View key={item?.id} style={{ marginTop: 12, flex: 1 }}>
        <View
          style={{
            height: randomBool ? 280 : 150,
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
            source={item?.image}
          />

          {!addedToPoll ? (
            <Pressable onPress={() => handleAddReceipt()}>
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
          ) : (
            <Pressable onPress={handleRemoveReceipt}>
              <Image
                source={require(`../assets/icons/${
                  !removedState ? "delete" : "done"
                }.png`)}
                style={{
                  height: 24,
                  width: 24,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  margin: 8,
                }}
              />
            </Pressable>
          )}
        </View>

        <View
          style={{
            paddingLeft: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          <Text style={styles.descTitle}>{item?.title}</Text>
          <Text
            style={{
              fontFamily: "poppins-regular",
              color: "#BBBABD",
              fontWeight: "bold",
            }}
          >
            Points: {item?.aggregateLikes}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
