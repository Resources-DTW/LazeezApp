import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";

const Container = styled.View`
  flex: 1;
  width: 100%;
`;

const isAndroid = Platform.OS === "android";

const ManualLocation = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const onChangeSearch = (query) => setSearch(query);

  return (
    <SafeAreaView
      style={{
        marginTop: isAndroid ? 30 : 0,
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <Container>
        <View style={{ margin: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 500 }}>
            Enter Your Area Or Street Name
          </Text>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Searchbar
            placeholder="Try JP Nagar, KK Road,.....Ect"
            onChangeText={onChangeSearch}
            value={search}
            style={{
              backgroundColor: "white",
              borderColor: "#7B7A7A",
              borderWidth: 1,
              borderRadius: 5,
            }}
            placeholderTextColor={"#CCCCCC"}
            iconColor="#CCCCCC"
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("AllowNotify")}
            style={{ flexDirection: "row", margin: 20 }}
          >
            <FontAwesome5 name="location-arrow" size={24} color="#F49F1C" />
            <Text
              style={{
                color: "#F49F1C",
                fontSize: 16,
                fontWeight: 500,
                paddingLeft: 15,
              }}
            >
              Use My Current Location
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#CCCCCC",
            marginTop: 10,
          }}
        />
      </Container>
    </SafeAreaView>
  );
};

export default ManualLocation;
