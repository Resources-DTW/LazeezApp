import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HorizontalCardDetail = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: 210,
        width: 160,
        backgroundColor: "white",
        elevation: 5,
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 0.4,
        borderColor: "#000",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductDetailScreen", { item })}
      >
        <Image
          resizeMode="cover"
          source={{ uri: item.mainImage }}
          style={{
            height: 100,
            width: 160,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 600,
            marginHorizontal: 5,
            marginTop: 8,
          }}
        >
          {item.title}
        </Text>
        <View style={{ flexDirection: "row", padding: 5 }}>
          {[1, 2, 3, 4, 5].map((index) => (
            <Ionicons
              key={index}
              name="star"
              size={12}
              color="gold"
              style={{ paddingRight: 5 }}
            />
          ))}
        </View>
        <Text style={{ marginLeft: 8, fontSize: 16, fontWeight: 600 }}>
          ₹ {item.price}
        </Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5,
          }}
        >
          <Text style={{ fontSize: 12, color: "#4B4B4B" }}>Free Delivery</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HorizontalCardDetail;
