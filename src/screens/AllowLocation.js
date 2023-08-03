import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  width: 100%;
`;

const isAndroid = Platform.OS === "android";

const AllowLocation = () => {
  const navigation = useNavigation();

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
            What’s Your Location?
          </Text>
        </View>
        <View style={{ margin: 20 }}>
          <Text style={{ color: "#4B4B4B" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing. Nunc eleifend
            metus pulvinar mattis.
          </Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Image source={require("../assets/images/location.png")} />
        </View>
        <View
          style={{ alignItems: "center", marginTop: 40, marginHorizontal: 20 }}
        >
          <TouchableOpacity
            onPress={() => console.log("Allow Location Triggered")}
            style={{
              backgroundColor: "#F49F1C",
              height: 50,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
              Allow Location
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ManualLocation")}
            style={{ marginTop: 20 }}
          >
            <Text style={{ fontWeight: 500, color: "#F49F1C", fontSize: 16 }}>
              Enter Location Manually
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default AllowLocation;
