import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SearchResultsTile from "./SearchResultsTile";

const isAndroid = Platform.OS === "android";

const Searchbar = () => {
  const navigation = useNavigation();
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //https://scary-polo-shirt-mite.cyclic.app - cyclic deploy
  //192.168.0.129, 192.168.0.124 - company ipv4
  //192.168.1.8
  const handleSearchTerm = async () => {
    try {
      const response = await axios.get(
        `https://scary-polo-shirt-mite.cyclic.app/api/products/search/${searchKey}`
      );
      console.log(response.data);
      setSearchResults(response.data);
    } catch (error) {
      console.log("Failed to get products: ", error);
    }
  };

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
          marginHorizontal: 20,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFF4E2",
          height: 50,
          borderRadius: 5,
          marginVertical: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#F49F1C" />
          </TouchableOpacity>
          <TextInput
            style={{ paddingRight: 15 }}
            placeholderTextColor={"#F49F1C"}
            placeholder="Type Something And Hit Enter...."
            value={searchKey}
            onChangeText={setSearchKey}
          />
          <TouchableOpacity onPress={() => handleSearchTerm()}>
            <Feather name="search" size={24} color="#F49F1C" />
          </TouchableOpacity>
        </View>
      </View>
      {searchResults.length === 0 ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            style={{ height: 400, width: 400 }}
            resizeMode="contain"
            source={require("../assets/images/noresults.png")}
          />
          <Text style={{ textAlign: "center", fontSize: 22, fontWeight: 600 }}>
            No Products Found
          </Text>
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchResultsTile item={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default Searchbar;
