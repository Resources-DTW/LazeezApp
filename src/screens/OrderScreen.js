import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const isAndroid = Platform.OS === "android";

const OrderScreen = () => {
  const navigation = useNavigation();

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
            My Order
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image source={require("../assets/images/EmptyOrder.png")} />
        <Text style={{ fontSize: 18, marginTop: 20, fontWeight: 600 }}>
          Your Order Is Empty
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
    </SafeAreaView>
  );
};

export default OrderScreen;
