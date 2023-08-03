import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const VerticalCardDetail = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={{ alignItems: "center" }}>
      <Pressable
        onPress={() => navigation.navigate("ProductDetailScreen", { item })}
      >
        <View
          style={{
            margin: 10,
            elevation: 5,
            backgroundColor: "white",
            height: 120,
            width: 350,
            borderRadius: 10,
            borderWidth: 0.4,
            borderColor: "#000",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <Image
              source={{ uri: item.mainImage }}
              style={{
                height: 90,
                width: 110,
                marginHorizontal: 15,
                borderRadius: 10,
              }}
            />
            <View>
              <Text style={{ fontSize: 16, fontWeight: 600 }}>
                {item.title}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  paddingRight: 5,
                  marginVertical: 5,
                }}
              >
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
              <Text style={{ fontSize: 16, fontWeight: 600 }}>
                ₹ {item.price}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 5,
                }}
              >
                <MaterialIcons
                  name="delivery-dining"
                  size={16}
                  color="black"
                  style={{ paddingRight: 5 }}
                />
                <Text style={{ fontSize: 12, color: "#4B4B4B" }}>
                  Free Delivery
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: "space-between",
                height: "100%",
                paddingVertical: 8,
                left: 80,
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  console.log("Triggered Heart Icon: ", item.title)
                }
              >
                <AntDesign name="hearto" size={24} color="#F49F1C" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log("Triggered AddToCart: ", item.title)}
              >
                <AntDesign name="plus" size={24} color="#7B7A7A" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default VerticalCardDetail;
