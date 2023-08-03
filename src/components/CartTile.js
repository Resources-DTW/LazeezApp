import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const CartTile = ({ item }) => {
  const [loading, setLoader] = useState(false);
  const [cartData, setCartData] = useState([]);

  // useEffect(() => {
  //   deleteCartItem();
  // }, []);

  // const deleteCartItem = async () => {
  //   setLoader(true);
  //   const token = await AsyncStorage.getItem("token");

  //   try {
  //     const endpoint = `https://scary-polo-shirt-mite.cyclic.app/api/cart/${item._id}`;

  //     const headers = {
  //       "Content-Type": "application/json",
  //       token: "Bearer " + JSON.parse(token),
  //     };

  //     const response = await axios.delete(endpoint, { headers });
  //     const cartProducts = response.data[0].products;

  //     setCartData(cartProducts);
  //     setLoader(false);
  //   } catch (error) {
  //     setCartError(error);
  //   } finally {
  //     setLoader(false);
  //   }
  // };

  return (
    <ScrollView>
      <View
        style={{
          height: 120,
          marginHorizontal: 20,
          marginVertical: 10,
          padding: 10,
          backgroundColor: "white",
          elevation: 3,
          width: "90%",
          borderWidth: 0.3,
          borderColor: "black",
          borderRadius: 10,
          justifyContent: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            resizeMode="cover"
            style={{ height: 85, width: 85, borderRadius: 10 }}
            source={{ uri: item.cartItem.mainImage }}
          />
          <View>
            <Text
              style={{
                fontWeight: 600,
                fontSize: 16,
                marginLeft: 20,
              }}
            >
              {item.cartItem.title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                paddingLeft: 20,
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
            <Text
              style={{
                fontWeight: 600,
                fontSize: 18,
                marginLeft: 20,
              }}
            >
              ₹ {item.cartItem.price * item.quantity}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 5,
                marginLeft: 20,
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
              <View
                style={{
                  left: 30,
                  height: 30,
                  width: 100,
                  borderWidth: 1,
                  borderColor: "orange",
                  padding: 5,
                  borderRadius: 10,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: 600 }}>
                  Quantity: {item.quantity}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {}}
              style={{ position: "absolute", left: 235 }}
            >
              <MaterialIcons name="cancel" size={24} color="orange" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CartTile;
