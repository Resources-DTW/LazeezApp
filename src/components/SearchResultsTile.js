import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SearchResultsTile = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetailScreen", { item })}
    >
      <View
        style={{
          marginHorizontal: 20,
          height: 80,
          width: "auto",
          backgroundColor: "white",
          elevation: 3,
          borderRadius: 5,
          padding: 5,
          alignItems: "center",
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
        <Image
          style={{ height: 60, width: 60, borderRadius: 5, margin: 10 }}
          source={{ uri: item.mainImage }}
        />
        <View>
          <Text style={{ fontSize: 16, fontWeight: 600, marginLeft: 20 }}>
            {item.title}
          </Text>
          <Text style={{ marginLeft: 20, marginTop: 5 }}>₹ {item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchResultsTile;
