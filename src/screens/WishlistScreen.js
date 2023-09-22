import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Image,
  ScrollView,
  RefreshControl,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const isAndroid = Platform.OS === "android";

const WishlistScreen = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [favData, setFavData] = useState([]);

  useEffect(() => {
    checkFavorites();
  }, []);

  const checkFavorites = async () => {
    const id = await AsyncStorage.getItem("id");
    const favoritesId = `favorites${JSON.parse(id)}`;

    try {
      const favoritesObj = await AsyncStorage.getItem(favoritesId);
      if (favoritesObj !== null) {
        const favorites = JSON.parse(favoritesObj);
        const favList = Object.values(favorites);
        setFavData(favList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFavorites = async (product) => {
    const id = await AsyncStorage.getItem("id");
    const favoritesId = `favorites${JSON.parse(id)}`;

    let productId = product;

    try {
      const existingItem = await AsyncStorage.getItem(favoritesId);
      let favoritesObj = existingItem ? JSON.parse(existingItem) : {};

      if (favoritesObj[productId]) {
        delete favoritesObj[productId];
        checkFavorites();
      }

      await AsyncStorage.setItem(favoritesId, JSON.stringify(favoritesObj));
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    checkFavorites();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <SafeAreaView
      style={{
        marginTop: isAndroid ? 30 : 0,
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <ScrollView>
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
          <View style={{ height: "100%", justifyContent: "center", left: 105 }}>
            <Text
              style={{
                color: "white",
                fontWeight: 600,
                fontSize: 18,
                textAlign: "center",
              }}
            >
              My Wishlist
            </Text>
          </View>
        </View>
        <View>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={favData}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: "white",
                  height: 100,
                  width: "90%",
                  marginHorizontal: 20,
                  marginVertical: 20,
                  borderRadius: 10,
                  borderWidth: 0.3,
                  borderColor: "black",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("ProductDetailScreen", { item })
                  }
                  style={{
                    height: 80,
                    width: "100%",
                    borderRadius: 10,
                    elevation: 3,
                    backgroundColor: "white",
                    marginHorizontal: 20,
                    flexDirection: "row",
                  }}
                >
                  <Image
                    resizeMode="cover"
                    style={{ height: 80, width: 80, borderRadius: 10 }}
                    source={{ uri: item.imageUrl }}
                  />
                  <View style={{ marginLeft: 20, marginTop: 10 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                      }}
                    >
                      {item.title}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 5,
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
                      style={{ paddingTop: 8, fontSize: 16, fontWeight: 600 }}
                    >
                      ₹ {item.price}
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "30%",
                      maxWidth: "80%",
                    }}
                  >
                    <TouchableOpacity onPress={() => deleteFavorites(item.id)}>
                      <FontAwesome5 name="trash" size={24} color="red" />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WishlistScreen;
