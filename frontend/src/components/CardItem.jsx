import React, { useEffect, useMemo, useState } from "react";
import { styles } from "../styles";
import { View, Text, Image, Pressable } from "react-native";
import { addLikeToRecipe, addNewRecipe, deleteRecipe } from "../api/poll";
import { translate } from "../api/translate";
import { useAppContext } from "../context/Auth";
import { useToast } from "react-native-toast-notifications";

export const CardItem = ({
  item,

  navigation,
  randomHeight,
  saved,
  addedToPoll,
  winner,
  likes,
}) => {
  const [addedState, setAddedState] = useState(false);
  const [removedState, setRemovedState] = useState(false);
  const [recipeLikes, setRecipeLikes] = useState(item?.vote_count);
  const [translatedTitle, setTranslatedTitle] = useState("");
  const { userInfo } = useAppContext();
  const toast = useToast();

  useEffect(() => {
    const translateTitle = async () => {
      const translatedText = await translate(item?.title);
      setTranslatedTitle(translatedText);
    };
    translateTitle();
  }, [item?.title]);

  const randomBool = randomHeight
    ? useMemo(() => Math.random() < 0.5, [])
    : false;

  const handleAddReceipt = async () => {
    const response = await addNewRecipe(userInfo.id, item.id, 1, 2);
    console.log("Added successfully", response?.status);

    setAddedState(true);
    setTimeout(() => {
      setAddedState(false);
    }, 1000);

    toast.show("New recipe added to the poll", {
      type: "normal",
      placement: "top",
      duration: 4000,
      offset: 30,
      animationType: "slide-in",
    });
  };
  const handleRemoveReceipt = async () => {
    const response = await deleteRecipe(userInfo.id, item?.id);
    console.log("Removed successfully ", response.status);
    setRemovedState(true);
    setTimeout(() => {
      setRemovedState(false);
      navigation.navigate("Home");
    }, 1000);
  };

  const handleOpenReceipt = () => {
    navigation.navigate("DetailsScreen", {
      recipeId: item?.id,
      receiptImage: item?.image ?? null,
      receiptSaved: saved ?? false,
    });
  };

  const handleLike = async (recipeId) => {
    try {
      const response = await addLikeToRecipe(recipeId);
      if (response.status === 200) {
        console.log("Recipe liked successfully");
      }

      setRecipeLikes(response?.data?.vote_count);
    } catch (error) {
      console.error("Error liking recipe:", error);
    }
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

          {!addedToPoll && !winner ? (
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
          ) : addedToPoll && !winner ? (
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
          ) : null}
        </View>

        <View
          style={{
            paddingLeft: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          <Text style={styles.descTitle}>{translatedTitle}</Text>

          {likes ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "poppins-regular",
                  color: "#BBBABD",
                  fontWeight: "bold",
                  fontSize: "16px",
                  paddingTop: "0.6rem",
                }}
              >
                {recipeLikes}
              </Text>

              <Pressable onPress={() => handleLike(item?.id)} style={{}}>
                <Image
                  source={require(`../assets/icons/like.png`)}
                  style={{
                    height: 32,
                    width: 32,
                  }}
                />
              </Pressable>
            </View>
          ) : null}
        </View>
      </View>
    </Pressable>
  );
};
