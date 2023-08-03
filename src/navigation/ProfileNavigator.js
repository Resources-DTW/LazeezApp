import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";
import OtpVerifyScreen from "../screens/OtpVerifyScreen";
import WishlistScreen from "../screens/WishlistScreen";
import CouponScreen from "../screens/CouponScreen";
import AddressScreen from "../screens/AddressScreen";
import PaymentMethod from "../screens/PaymentMethod";
import TnCScreen from "../screens/TnCScreen";
import LanguageScreen from "../screens/LanguageScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="OtpVerifyScreen"
        component={OtpVerifyScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Wishlist"
        component={WishlistScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Coupons"
        component={CouponScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Address"
        component={AddressScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Payment"
        component={PaymentMethod}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Terms"
        component={TnCScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Languages"
        component={LanguageScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
