import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  AntDesign,
  SimpleLineIcons,
  MaterialCommunityIcons,
  EvilIcons,
  Feather,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const Container = styled.View`
  flex: 1;
  width: 100%;
`;

const isAndroid = Platform.OS === "android";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    checkExistingUser();
  }, []);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id");
    const useId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLogin(true);
      } else {
        navigation.navigate("LoginScreen");
      }
    } catch (error) {
      console.log("Error retrieving the data: ", error);
    }
  };

  const userLogout = async () => {
    const id = await AsyncStorage.getItem("id");
    const useId = `user${JSON.parse(id)}`;

    try {
      await AsyncStorage.multiRemove([useId, "id"]);
      await GoogleSignin.revokeAccess();
      await auth().signOut();
      navigation.replace("Home");
    } catch (error) {
      console.log("Error logging out the user: ", error);
    }
  };

  const onLogout = () => {
    Alert.alert("Logout", "Are you sure you want to log out?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      {
        text: "Continue",
        onPress: () => userLogout(),
      },
      { defaultIndex: 1 },
    ]);
  };

  return (
    <SafeAreaView
      style={{
        marginTop: isAndroid ? 30 : 0,
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <ScrollView>
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
              My Profile
            </Text>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 25 }}>
          <View>
            <Image
              style={{ height: 100, width: 100 }}
              source={require("../assets/images/user.png")}
            />
            <TouchableOpacity
              onPress={() => {}}
              style={{
                backgroundColor: "#F49F1C",
                alignItems: "center",
                justifyContent: "center",
                height: 30,
                width: 30,
                borderRadius: 50,
                position: "absolute",
                top: 70,
                left: 70,
              }}
            >
              <AntDesign name="edit" size={20} color="white" />
            </TouchableOpacity>
            <View
              style={{
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: 600, textAlign: "center" }}
              >
                {userLogin === true ? userData.username : "User"}
              </Text>
            </View>
          </View>
        </View>
        {userLogin === false ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <TouchableOpacity
              style={{
                height: 50,
                width: 180,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#F49F1C",
                borderRadius: 10,
                elevation: 3,
              }}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text style={{ fontWeight: 600, color: "white" }}>
                Login To Continue
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <View style={{ marginTop: 30 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Order")}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 50,
                  width: 370,
                  backgroundColor: "white",
                  elevation: 3,
                  marginHorizontal: 20,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}
              >
                <SimpleLineIcons name="handbag" size={24} color="#F49F1C" />
                <Text style={{ marginLeft: 20 }}>My Orders</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Wishlist")}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 50,
                  width: 370,
                  backgroundColor: "white",
                  elevation: 3,
                  marginHorizontal: 20,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}
              >
                <Ionicons name="heart-outline" size={24} color="#F49F1C" />
                <Text style={{ marginLeft: 20 }}>Wishlist</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Coupons")}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 50,
                  width: 370,
                  backgroundColor: "white",
                  elevation: 3,
                  marginHorizontal: 20,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="ticket-percent-outline"
                  size={24}
                  color="#F49F1C"
                />
                <Text style={{ marginLeft: 20 }}>Coupons</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Address")}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 50,
                  width: 370,
                  backgroundColor: "white",
                  elevation: 3,
                  marginHorizontal: 20,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}
              >
                <EvilIcons name="location" size={24} color="#F49F1C" />
                <Text style={{ marginLeft: 20 }}>Address</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Payment")}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 50,
                  width: 370,
                  backgroundColor: "white",
                  elevation: 3,
                  marginHorizontal: 20,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}
              >
                <Ionicons name="wallet-outline" size={24} color="#F49F1C" />
                <Text style={{ marginLeft: 20 }}>Payment Method</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Terms")}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 50,
                  width: 370,
                  backgroundColor: "white",
                  elevation: 3,
                  marginHorizontal: 20,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}
              >
                <AntDesign name="filetext1" size={24} color="#F49F1C" />
                <Text style={{ marginLeft: 20 }}>
                  Terms, Policies And Conditions
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Languages")}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 50,
                  width: 370,
                  backgroundColor: "white",
                  elevation: 3,
                  marginHorizontal: 20,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="alphabetical"
                  size={24}
                  color="#F49F1C"
                />
                <Text style={{ marginLeft: 20 }}>Languages</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 50,
                  width: 370,
                  backgroundColor: "white",
                  elevation: 3,
                  marginHorizontal: 20,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}
              >
                <Feather name="phone-call" size={24} color="#F49F1C" />
                <Text style={{ marginLeft: 20 }}>Help Center</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{ marginBottom: 80, marginTop: 40, alignItems: "center" }}
            >
              <TouchableOpacity
                onPress={() => onLogout()}
                style={{
                  height: 50,
                  width: 360,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#F49F1C",
                  borderRadius: 10,
                  elevation: 3,
                }}
              >
                <Text style={{ color: "white", fontWeight: 600, fontSize: 18 }}>
                  Log Out
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
