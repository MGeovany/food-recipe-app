import React, { useState } from "react";
import { ActivityIndicator, Button, Text, View } from "react-native";

export const SignInScreen = () => {
  const [loading, isLoading] = useState(false);

  return (
    <View>
      <Text>Sign In Screen</Text>
      {loading ? (
        <ActivityIndicator color={"#000"} animating={true} size="small" />
      ) : (
        <Button title="Sign In" onPress={() => isLoading(true)} />
      )}
    </View>
  );
};
