import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export const DetailsScreen = ({ route, navigation }) => {
  const { receiptId, receiptImage, receiptName } = route.params;

  return (
    <ScrollView>
      <View
        style={{
          position: "relative",
        }}
      >
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "white",
            borderRadius: 50,
            width: "40px",
            height: "40px",
            position: "absolute",
            top: 15,
            left: 15,
            zIndex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/icons/back.png")}
            style={{
              height: "30px",
              width: "30px",
            }}
          />
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "white",
            borderRadius: 50,
            width: "40px",
            height: "40px",
            position: "absolute",
            top: 15,
            right: 15,
            zIndex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/icons/love.png")}
            style={{
              height: "30px",
              width: "30px",
            }}
          />
        </Pressable>

        <Image
          source={receiptImage}
          style={{
            height: "400px",
            width: "100%",
            alignSelf: "stretch",
          }}
          resizeMode="cover"
        />
      </View>
      <View style={{ backgroundColor: "white", top: -12 }}></View>
    </ScrollView>
  );
};
