import { View, Text } from "react-native";
import React from "react";

const CartTotal = ({ item }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Item Price</Text>
      </View>
    </View>
  );
};

export default CartTotal;
