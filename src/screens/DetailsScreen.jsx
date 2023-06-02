import React from "react";
import { View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Taste } from "../components/Taste";
import { ReceiptDetails } from "./ReceiptDetails";
import { SimilarReceipts } from "../components/SimilarReceipts";
import { BackButton } from "../components/BackButton";
import { SaveButton } from "../components/SaveButton";

export const DetailsScreen = ({ route, navigation }) => {
  const { receiptId, receiptImage, receiptName } = route.params;

  return (
    <ScrollView>
      <View
        style={{
          position: "relative",
        }}
      >
        <BackButton navigation={navigation} />
        <SaveButton />
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
      <Taste />
      <ReceiptDetails />
      <SimilarReceipts />
    </ScrollView>
  );
};
