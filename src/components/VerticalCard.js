import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import useFetch from "../hooks/useFetch";
import VerticalCardDetail from "./VerticalCardDetail";

const VerticalCard = () => {
  const navigation = useNavigation();
  const { products, isLoading, error } = useFetch();

  return (
    <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: 600 }}>Popular Items</Text>
        <TouchableOpacity
          onPress={() => console.log("Vertical Card View All Triggered")}
        >
          <Text style={{ fontSize: 12, color: "#F49F1C" }}>View All</Text>
        </TouchableOpacity>
      </View>
      <View>
        {isLoading ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              height: 160,
            }}
          >
            <ActivityIndicator size={"large"} color={"#F49F1C"} />
          </View>
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={products}
            // keyExtractor={({ item }) => item._id}
            renderItem={({ item }) => <VerticalCardDetail item={item} />}
          />
        )}
      </View>
    </View>
  );
};

export default VerticalCard;
