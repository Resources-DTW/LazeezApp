import {
  View,
  Text,
  Image,
  SafeAreaView,
  Platform,
  Dimensions,
  TouchableOpacity,
  Linking,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

const Container = styled.View`
  flex: 1;
  width: 100%;
`;
const OrContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
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
  margin-top: 10px;
`;

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, "Password must be at least 8 characters")
    .required("Required"),
  username: Yup.string()
    .min(3, "Provide a valid username")
    .required("Required"),
});

const isAndroid = Platform.OS === "android";

const LoginScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const login = async (values) => {
    setIsLoading(true);
    try {
      const endpoint = "https://scary-polo-shirt-mite.cyclic.app/api/login";
      const data = values;

      const response = await axios.post(endpoint, data);
      if (response.status === 200) {
        setIsLoading(false);
        setResponseData(response.data);
        // console.log(`user${responseData._id}`);
        await AsyncStorage.setItem(
          `user${responseData._id}`,
          JSON.stringify(responseData)
        );
        await AsyncStorage.setItem("id", JSON.stringify(responseData._id));
        await AsyncStorage.setItem(
          "token",
          JSON.stringify(responseData.accessToken)
        );
        navigation.replace("ProfileScreen");
      } else {
        Alert.alert(
          "Invalid Credentials",
          "Please provide a valid credentials",
          [
            {
              text: "Cancel",
              onPress: () => {},
            },
            {
              text: "Confirm",
              onPress: () => {},
            },
            { defaultIndex: 1 },
          ]
        );
      }
    } catch (error) {
      Alert.alert("Error", "Opps, Error logging in try again", [
        {
          text: "Cancel",
          onPress: () => {},
        },
        {
          text: "Ok",
          onPress: () => {},
        },
        { defaultIndex: 1 },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  GoogleSignin.configure({
    webClientId:
      "586012277192-cgol7jl7d4582avlvdierd1f5kkhn64p.apps.googleusercontent.com",
  });

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onGoogleButtonPress = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const token = googleCredential.token;
    // console.log(token);
    // Sign-in the user with the credential
    // const user_sign_in = auth().signInWithCredential(googleCredential);
    // console.log(user.uid);
    setResponseData(token);
    console.log(responseData);
    // console.log(responseData);
  };

  if (initializing) return null;

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
          height: 100,
          width: "100%",
          top: 50,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          overflow: "hidden",
        }}
      />
      <Container>
        <ScrollView>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 20, fontWeight: 500 }}
            >
              Login With Email
            </Text>
          </View>
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => login(values)}
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
                      label="Password"
                      secureTextEntry={visible}
                      onFocus={() => setFieldTouched("password")}
                      onBlur={() => setFieldTouched("password", "")}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      autoCapitalize="none"
                      mode="outlined"
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
                        LOGIN
                      </Text>
                    ) : (
                      <ActivityIndicator size={"small"} color={"white"} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
          <View
            style={{
              marginTop: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={{ fontWeight: 600, fontSize: 16, color: "#F49F1C" }}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
          <OrContainer>
            <OrLine />
            <Text style={{ fontSize: 14, textAlign: "center" }}>Or</Text>
            <OrLine />
          </OrContainer>
          <SocialIconContainer>
            <TouchableOpacity onPress={onGoogleButtonPress}>
              <Image source={require("../assets/images/gmail.png")} />
            </TouchableOpacity>
            {/* For FB Login : https://www.youtube.com/watch?v=SDOJo8m9DNY */}
            <TouchableOpacity onPress={() => console.log("Facebook Login")}>
              <Image source={require("../assets/images/fb.png")} />
            </TouchableOpacity>
          </SocialIconContainer>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
};

export default LoginScreen;
