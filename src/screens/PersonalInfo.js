import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  width: 100%;
`;

const isAndroid = Platform.OS === "android";

const PersonalInfo = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView
      style={{
        marginTop: isAndroid ? 30 : 0,
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <Container>
        <View style={{ marginTop: 50 }} />
        {/* <View style={{ margin: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" />
          </TouchableOpacity>
        </View> */}
        <View style={{ marginLeft: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 500 }}>
            Help Us Get To Know You
          </Text>
        </View>
        <View style={{ margin: 20 }}>
          <Text style={{ color: "#4B4B4B" }}>
            We need your location to show available restaurants & products
          </Text>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <TextInput
            style={{ marginTop: 20, backgroundColor: "white" }}
            keyboardType="default"
            mode="outlined"
            outlineColor="#DADADA"
            activeOutlineColor="#F49F1C"
            label="Name"
            value={name}
            onChangeText={() => setName()}
            placeholder="Enter Your Name"
          />
          <TextInput
            style={{ marginTop: 20, backgroundColor: "white" }}
            keyboardType="email-address"
            mode="outlined"
            outlineColor="#DADADA"
            activeOutlineColor="#F49F1C"
            label="Email"
            value={email}
            onChangeText={() => setEmail()}
            placeholder="Enter Your Email Address"
          />
        </View>
        <View
          style={{ alignItems: "center", marginTop: 50, marginHorizontal: 20 }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("AllowLocation")}
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
              Confirm Details
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default PersonalInfo;
