import {
  View,
  Text,
  Image,
  SafeAreaView,
  Platform,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components/native";
import { TextInput, HelperText } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  flex: 1;
  width: 100%;
`;
const OrContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

const OrLine = styled.View`
  flex: 1;
  background-color: #7b7a7a;
  height: 1px;
  margin-left: 20px;
  margin-right: 20px;
`;

const SocialIconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
`;

const isAndroid = Platform.OS === "android";
const LoginScreen = () => {
  const navigation = useNavigation();
  const [number, setNumber] = useState("");

  return (
    <SafeAreaView
      style={{
        marginTop: isAndroid ? 30 : 0,
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View style={{ width: "100%", height: "30%" }}>
        <Image
          style={{
            height: Dimensions.get("window").height / 2.5,
            width: "100%",
          }}
          source={require("../assets/images/bg.png")}
        />
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          height: 150,
          width: "100%",
          top: 50,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          overflow: "hidden",
        }}
      />
      <Container>
        <View
          style={{
            marginTop: -50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 20, fontWeight: 500 }}>
            Enter Your Mobile Number To Get OTP
          </Text>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <TextInput
            style={{ marginTop: 20 }}
            keyboardType="number-pad"
            mode="outlined"
            outlineColor="#DADADA"
            activeOutlineColor="#F49F1C"
            label="Mobile Number"
            value={number}
            maxLength={10}
            onChangeText={(text) => setNumber(text)}
            placeholder="10 digit mobile number"
            left={<TextInput.Affix text="+91" />}
          />
          {/* <HelperText type="error" visible={hasErrors()}>
          Mobile Number is invalid!
        </HelperText> */}
        </View>
        <View
          style={{ alignItems: "center", marginTop: 30, marginHorizontal: 20 }}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("OtpVerifyScreen", {
                number,
              })
            }
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
              Get OTP
            </Text>
          </TouchableOpacity>
        </View>
        <OrContainer>
          <OrLine />
          <Text style={{ fontSize: 16, textAlign: "center" }}>Or</Text>
          <OrLine />
        </OrContainer>
        <SocialIconContainer>
          <TouchableOpacity onPress={() => {}}>
            <Image source={require("../assets/images/gmail.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Facebook Login")}>
            <Image source={require("../assets/images/fb.png")} />
          </TouchableOpacity>
        </SocialIconContainer>
        <View
          style={{
            marginTop: Dimensions.get("window").height / 15,
            alignItems: "center",
            marginHorizontal: 40,
          }}
        >
          <Text style={{ textAlign: "center" }}>
            By Clicking, I Accept The Terms Of Service And Privacy Policy
          </Text>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default LoginScreen;
