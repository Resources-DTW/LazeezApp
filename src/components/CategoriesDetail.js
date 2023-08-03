import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategoriesDetail = ({ item }) => {
  return (
    <View style={{ alignItems: "center", margin: 5 }}>
      <Image
        style={{ height: 60, width: 60, borderRadius: 50, marginRight: 5 }}
        resizeMode="contain"
        source={{ uri: item.imageUrl }}
      />
      <Text style={{ fontWeight: 600, marginTop: 5 }}>{item.title}</Text>
    </View>
  );
};

export default CategoriesDetail;
