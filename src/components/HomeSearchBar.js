import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeSearchBar = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF4E2",
        height: 50,
        borderRadius: 5,
        marginBottom: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <TextInput
          style={{ paddingRight: 15 }}
          placeholderTextColor={"#F49F1C"}
          placeholder="Type Something And Hit Enter...."
          onPressIn={() => navigation.navigate("Searchbar")}
        />
        <TouchableOpacity>
          <Feather name="search" size={24} color="#F49F1C" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeSearchBar;
