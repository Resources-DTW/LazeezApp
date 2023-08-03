import {
  View,
  Text,
  Image,
  SafeAreaView,
  Platform,
  Dimensions,
  TouchableOpacity,
  Linking,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";

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

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .required("Required"),
  email: Yup.string()
    .email("Provide a valid email address")
    .required("Required"),
  location: Yup.string()
    .min(3, "Provide a valid location")
    .required("Required"),
  username: Yup.string()
    .min(3, "Provide a valid username")
    .required("Required"),
});

const isAndroid = Platform.OS === "android";

const RegisterScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = async (values) => {
    setIsLoading(true);
    try {
      const endpoint = "https://scary-polo-shirt-mite.cyclic.app/api/register";
      const data = values;

      const response = await axios.post(endpoint, data);

      if (response.status === 201) {
        // console.log(response.data);
        navigation.replace("LoginScreen");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView
      style={{
        marginTop: isAndroid ? 30 : 0,
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
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
            <Text
              style={{ textAlign: "center", fontSize: 20, fontWeight: 500 }}
            >
              Register With Email
            </Text>
          </View>
          <Formik
            initialValues={{
              email: "",
              password: "",
              location: "",
              username: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => registerUser(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              setFieldTouched,
              isValid,
            }) => (
              <View>
                <View>
                  <View style={{ marginHorizontal: 20 }}>
                    <TextInput
                      style={{ marginTop: 20, backgroundColor: "white" }}
                      keyboardType="default"
                      mode="outlined"
                      outlineColor="#DADADA"
                      activeOutlineColor="#F49F1C"
                      onFocus={() => setFieldTouched("username")}
                      onBlur={() => setFieldTouched("username", "")}
                      value={values.username}
                      onChangeText={handleChange("username")}
                      label="Username"
                      autoCapitalize="none"
                      autoCorrect={false}
                      placeholder="Enter Your Username"
                    />
                  </View>
                  <View style={{ marginHorizontal: 20 }}>
                    <TextInput
                      style={{ marginTop: 20, backgroundColor: "white" }}
                      keyboardType="email-address"
                      mode="outlined"
                      outlineColor="#DADADA"
                      activeOutlineColor="#F49F1C"
                      onFocus={() => setFieldTouched("email")}
                      onBlur={() => setFieldTouched("email", "")}
                      value={values.email}
                      onChangeText={handleChange("email")}
                      label="Email Id"
                      autoCapitalize="none"
                      autoCorrect={false}
                      placeholder="Enter Email Address"
                    />
                  </View>
                  <View style={{ marginHorizontal: 20 }}>
                    <TextInput
                      style={{ marginTop: 20, backgroundColor: "white" }}
                      keyboardType="default"
                      mode="outlined"
                      outlineColor="#DADADA"
                      activeOutlineColor="#F49F1C"
                      onFocus={() => setFieldTouched("location")}
                      onBlur={() => setFieldTouched("location", "")}
                      value={values.location}
                      onChangeText={handleChange("location")}
                      label="Location"
                      autoCapitalize="none"
                      autoCorrect={false}
                      placeholder="Enter Location"
                    />
                  </View>
                  <View style={{ marginHorizontal: 20 }}>
                    <TextInput
                      style={{ marginTop: 20, backgroundColor: "white" }}
                      label="Password"
                      secureTextEntry={visible}
                      autoCapitalize="none"
                      mode="outlined"
                      onFocus={() => setFieldTouched("password")}
                      onBlur={() => setFieldTouched("password", "")}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      outlineColor="#DADADA"
                      activeOutlineColor="#F49F1C"
                      right={
                        <TextInput.Icon
                          icon={visible ? "eye-off-outline" : "eye-outline"}
                          onPress={() => setVisible(!visible)}
                        />
                      }
                    />
                  </View>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    marginTop: 30,
                    marginHorizontal: 20,
                  }}
                >
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={{
                      backgroundColor: "#F49F1C",
                      height: 50,
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 5,
                    }}
                  >
                    {isLoading === false ? (
                      <Text
                        style={{
                          color: "white",
                          fontWeight: 700,
                          fontSize: 16,
                        }}
                      >
                        SIGN UP
                      </Text>
                    ) : (
                      <ActivityIndicator size={"small"} color={"white"} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
