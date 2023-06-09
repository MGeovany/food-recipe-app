import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/loading.gif")} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default Loading;
