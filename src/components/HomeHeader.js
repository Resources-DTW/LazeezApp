import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

const HomeHeader = ({ userData }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        margin: 20,
      }}
    >
      <Image
        style={{ height: 55, width: 55 }}
        source={require("../assets/images/logo.png")}
      />
      <TouchableOpacity
        onPress={() => console.log("Get Location Triggered")}
        style={{
          flexDirection: "row",
          maxWidth: 150,
          alignItems: "center",
          margin: 20,
          height: 50,
        }}
      >
        <Text style={{ paddingRight: 10, color: "#7B7A7A", fontSize: 14 }}>
          {userData ? userData.location : "Chennai, TN"}
        </Text>
        <SimpleLineIcons name="location-pin" size={24} color="#F49F1C" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
