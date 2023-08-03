import {
  View,
  Text,
  Image,
  SafeAreaView,
  Platform,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  flex: 1;
  width: 100%;
`;

const OtpField = styled(TextInput)`
  background-color: #fff;
  width: 45px;
  height: 50px;
  text-align: center;
  border: 1px solid #7b7a7a;
  border-radius: 4px;
`;

const OtpFieldLg = styled(TextInput)`
  background-color: #fff;
  width: 60%;
  height: 50px;
  text-align: center;
  border: 1px solid #7b7a7a;
  border-radius: 4px;
`;

const isAndroid = Platform.OS === "android";

const OtpVerifyScreen = ({ route }) => {
  const { number } = route.params;
  const navigation = useNavigation();
  const i1 = useRef();
  const i2 = useRef();
  const i3 = useRef();
  const i4 = useRef();
  const i5 = useRef();
  const i6 = useRef();
  const [f1, setF1] = useState("");
  const [f2, setF2] = useState("");
  const [f3, setF3] = useState("");
  const [f4, setF4] = useState("");
  const [f5, setF5] = useState("");
  const [f6, setF6] = useState("");
  const [timer, setTimer] = useState(120); // Initial timer value in seconds
  const [isTimerActive, setIsTimerActive] = useState(true);

  useEffect(() => {
    let interval;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
    }

    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleResendCode = () => {
    // Code to resend the OTP to the user's mobile number
    // For demonstration purposes, we'll just reset the timer to 120 seconds
    setTimer(90);
    setIsTimerActive(true);
    navigation.navigate("LoginScreen");
  };

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
          source={require("../assets/images/otp-bg.png")}
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
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{ textAlign: "center", fontSize: 20, fontWeight: 500 }}
            >
              Verify With OTP Send To
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 500 }}> +91 {number}</Text>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              marginTop: 40,
              justifyContent: "center",
            }}
          >
            {/* <OtpField
              ref={i1}
              value={f1}
              activeUnderlineColor="#7B7A7A"
              maxLength={1}
              keyboardType="number-pad"
              onChangeText={(value) => {
                setF1(value);
                if (value.length >= 1) {
                  i2.current.focus();
                }
              }}
            />
            <OtpField
              ref={i2}
              value={f2}
              activeUnderlineColor="#7B7A7A"
              maxLength={1}
              keyboardType="number-pad"
              onChangeText={(value) => {
                setF2(value);
                if (value.length >= 1) {
                  i3.current.focus();
                } else if (value.length < 1) {
                  i1.current.focus();
                }
              }}
            />
            <OtpField
              ref={i3}
              value={f3}
              activeUnderlineColor="#7B7A7A"
              maxLength={1}
              keyboardType="number-pad"
              onChangeText={(value) => {
                setF3(value);
                if (value.length >= 1) {
                  i4.current.focus();
                } else if (value.length < 1) {
                  i2.current.focus();
                }
              }}
            />
            <OtpField
              ref={i4}
              value={f4}
              activeUnderlineColor="#7B7A7A"
              maxLength={1}
              keyboardType="number-pad"
              onChangeText={(value) => {
                setF4(value);
                if (value.length >= 1) {
                  i5.current.focus();
                } else if (value.length < 1) {
                  i3.current.focus();
                }
              }}
            />
            <OtpField
              ref={i5}
              value={f5}
              activeUnderlineColor="#7B7A7A"
              maxLength={1}
              keyboardType="number-pad"
              onChangeText={(value) => {
                setF5(value);
                if (value.length >= 1) {
                  i6.current.focus();
                } else if (value.length < 1) {
                  i4.current.focus();
                }
              }}
            />
            <OtpField
              ref={i6}
              value={f6}
              activeUnderlineColor="#7B7A7A"
              maxLength={1}
              keyboardType="number-pad"
              onChangeText={(value) => {
                setF6(value);
                if (value.length >= 1) {
                  i6.current.focus();
                } else if (value.length < 1) {
                  i5.current.focus();
                }
              }}
            /> */}
            <OtpFieldLg
              maxLength={6}
              activeUnderlineColor="#7B7A7A"
              keyboardType="number-pad"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              marginRight: Dimensions.get("window").width / 2.1,
            }}
          >
            <ActivityIndicator size="small" color="#F49F1C" />
            <Text style={{ padding: 10 }}>Auto Fetching OTP...</Text>
          </View>
        </View>
        <View
          style={{ alignItems: "center", marginTop: 10, marginHorizontal: 20 }}
        >
          <TouchableOpacity
            onPress={() => {}}
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
              Verify
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 20, flexDirection: "row" }}>
          <Text style={{ color: "#4B4B4B" }}>Didn’t Receive It? Retry In </Text>
          {isTimerActive ? (
            <Text> {formatTime(timer)}</Text>
          ) : (
            <TouchableOpacity onPress={handleResendCode}>
              <Text style={{ color: "#F49F1C", fontWeight: 600 }}>
                Resend Code
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default OtpVerifyScreen;
