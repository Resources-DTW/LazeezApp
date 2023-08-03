import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import useFetch from "../hooks/useFetch";
import CartTile from "../components/CartTile";
import CartTotal from "../components/CartTotal";

const isAndroid = Platform.OS === "android";

const CartScreen = () => {
  const navigation = useNavigation();
  const { cartData, loading, cartError, refetch } = useFetch();

  return (
    <SafeAreaView
      style={{
        marginTop: isAndroid ? 30 : 0,
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View
        style={{
          height: 50,
          width: "100%",
          backgroundColor: "#F49F1C",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            height: "100%",
            justifyContent: "center",
            marginHorizontal: 10,
          }}
        >
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <View style={{ height: "100%", justifyContent: "center", left: 115 }}>
          <Text
            style={{
              color: "white",
              fontWeight: 600,
              fontSize: 18,
              textAlign: "center",
            }}
          >
            My Cart
          </Text>
        </View>
      </View>
      <ScrollView>
        <View>
          {loading ? (
            <ActivityIndicator size={"large"} color={"orange"} />
          ) : (
            <FlatList
              data={cartData}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => <CartTile item={item} />}
            />
          )}
        </View>
        <View style={{ margin: 20, flexDirection: "row" }}>
          <TextInput
            style={{
              backgroundColor: "white",
              borderWidth: 0.3,
              padding: 15,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              elevation: 3,
              width: "65%",
            }}
            placeholder="Enter Promo Code"
          />
          <TouchableOpacity
            style={{
              justifyContent: "center",
              backgroundColor: "#F49F1C",
              padding: 15,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: 600 }}>
              Apply Coupon
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontWeight: 600, fontSize: 16 }}>
            Delivery Options
          </Text>
          <Text style={{ marginTop: 5 }}>- Home Delivery</Text>
          <Text style={{ marginTop: 5 }}>- Take Away</Text>
        </View>
        <View style={{ margin: 20 }}></View>
      </ScrollView>
      {/* {!cartData ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image source={require("../assets/images/EmptyCart.png")} />
          <Text style={{ fontSize: 18, marginTop: 20, fontWeight: 600 }}>
            Your Cart Is Empty
          </Text>
          <Text
            style={{
              textAlign: "center",
              marginHorizontal: 50,
              marginVertical: 10,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur
            posuere molestie fermentum.
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={{
              height: 50,
              width: 370,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F49F1C",
              borderRadius: 10,
              elevation: 3,
              marginTop: 20,
            }}
          >
            <Text style={{ color: "white", fontWeight: 600, fontSize: 18 }}>
              Back To Menu
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )} */}
    </SafeAreaView>
  );
};

export default CartScreen;
