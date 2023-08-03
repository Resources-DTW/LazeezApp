import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import addToCart from "../hooks/addToCart";
import AsyncStorage from "@react-native-async-storage/async-storage";

const isAndroid = Platform.OS === "android";

const options = [
  { label: "Rice", value: "rice", price: "30" },
  { label: "Water Bottle", value: "water", price: "10" },
  { label: "Eggs", value: "eggs", price: "6" },
];

const ProductDetailScreen = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  const [value, setValue] = useState(null);
  const [count, setCount] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [favorites, setFavorites] = useState(false);

  // Function to handle the button press
  const handleLikePress = () => {
    setIsLiked((prevLiked) => !prevLiked);
    if (isLoggedIn === false) {
      navigation.navigate("LoginScreen");
    } else {
      addToFavorites();
    }
  };

  const addToFavorites = async () => {
    const id = await AsyncStorage.getItem("id");
    const favoritesId = `favorites${JSON.parse(id)}`;

    let productId = item._id;
    let productObj = {
      title: item.title,
      id: item._id,
      categories: item.categories,
      price: item.price,
      imageUrl: item.mainImage,
      product_location: item.product_location,
    };

    try {
      const existingItem = await AsyncStorage.getItem(favoritesId);
      let favoritesObj = existingItem ? JSON.parse(existingItem) : {};

      if (favoritesObj[productId]) {
        delete favoritesObj[productId];

        setFavorites(false);
      } else {
        favoritesObj[productId] = productObj;
        setFavorites(true);
      }

      await AsyncStorage.setItem(favoritesId, JSON.stringify(favoritesObj));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCart = () => {
    if (isLoggedIn === false) {
      navigation.navigate("LoginScreen");
    } else {
      addToCart(item._id, count);
    }
  };

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const id = AsyncStorage.getItem("id");
      if (id !== null) {
        setIsLoggedIn(true);
        console.log(isLoggedIn);
      } else {
        console.log("user not logged in");
      }
    } catch (error) {}
  };

  const renderItem = (item) => {
    return (
      <View>
        <RadioButton.Item
          label={item.label}
          value={item.value}
          style={{}}
          color="#F49F1C"
        />
      </View>
    );
  };

  // const AddToCart = async () => {
  //   setIsLoading(true);
  //   const endpoint = "https://scary-polo-shirt-mite.cyclic.app/api/cart";
  //   try {
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <SafeAreaView
      style={{
        marginTop: isAndroid ? 30 : 0,
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <ScrollView
        style={{ flex: 1, height: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Image
            style={{ width: "100%", height: "60%" }}
            source={{ uri: item.mainImage }}
          />
          <Text style={{ margin: 20, fontSize: 18, fontWeight: 600 }}>
            {item.title}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ position: "absolute", marginTop: 10, marginLeft: 10 }}
          >
            <AntDesign name="left" size={36} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ left: 340, bottom: 190 }}>
            <TouchableOpacity onPress={() => handleLikePress()}>
              <AntDesign
                name={isLiked ? "heart" : "hearto"}
                size={24}
                color="#F49F1C"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingRight: 5,
              marginVertical: 5,
              alignItems: "center",
              flex: 1,
              marginHorizontal: 20,
              bottom: 200,
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
            <Text style={{ textAlign: "center", paddingLeft: 5 }}>
              5 Rating
            </Text>
          </View>
          <View
            style={{ flex: 1, marginHorizontal: 20, marginTop: 5, bottom: 190 }}
          >
            <Text>{item.description}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
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
            <Text style={{ fontSize: 18, fontWeight: 600, marginTop: 10 }}>
              Extra
            </Text>
            <View style={{ marginTop: 10, flex: 1, height: 600 }}>
              <RadioButton.Group
                onValueChange={(newValue) => setValue(newValue)}
                value={value}
              >
                {options.map(renderItem)}
              </RadioButton.Group>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          height: 60,
          width: "auto",
          backgroundColor: "white",
          flexDirection: "row",
          marginHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: 50,
            width: 100,
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#F49F1C",
            backgroundColor: "white",
            borderRadius: 10,
            justifyContent: "space-between",
            padding: 10,
            marginRight: 15,
          }}
        >
          <Pressable onPress={Decrement}>
            <AntDesign name="minus" size={16} color="black" />
          </Pressable>
          <Text style={{ fontWeight: 600 }}>{count}</Text>
          <Pressable onPress={Increment}>
            <AntDesign name="plus" size={16} color="black" />
          </Pressable>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleCart}
            style={{
              height: 50,
              width: 235,
              borderRadius: 10,
              backgroundColor: "#F49F1C",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: 600, fontSize: 16 }}>
              Add Item ₹ {count * item.price}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
