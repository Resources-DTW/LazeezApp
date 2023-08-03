import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import useFetch from "../hooks/useFetch";
import CategoriesDetail from "./CategoriesDetail";

const Categories = () => {
  const navigation = useNavigation();
  const { categories, isLoading, error } = useFetch();

  return (
    <View style={{ marginHorizontal: 20, marginTop: 10 }}>
      <View>
        <Text style={{ fontWeight: 600 }}>All Categories</Text>
      </View>
      <View style={{ marginTop: 15 }}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={"#F49F1C"} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            // keyExtractor={({ item }) => item._id}
            renderItem={({ item }) => <CategoriesDetail item={item} />}
          />
        )}
      </View>
    </View>
  );
};

export default Categories;
