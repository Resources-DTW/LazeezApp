import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import PersonalInfo from "../screens/PersonalInfo";
import AllowLocation from "../screens/AllowLocation";
import ManualLocation from "../screens/ManualLocation";
import AllowNotify from "../screens/AllowNotify";
import HomeScreen from "../screens/HomeScreen";
import Searchbar from "../components/Searchbar";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import { HomeNavigator } from "./HomeNavigator";
import CameraScreen from "../screens/CameraScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ gestureEnabled: false, headerShown: false }}
        name="OnboardingScreen"
        component={OnboardingScreen}
      />
      <Stack.Screen
        options={{ headerShown: false, gestureEnabled: false }}
        name="PersonalInfo"
        component={PersonalInfo}
      />
      <Stack.Screen
        options={{ headerShown: false, gestureEnabled: false }}
        name="AllowLocation"
        component={AllowLocation}
      />
      <Stack.Screen
        options={{ headerShown: false, gestureEnabled: false }}
        name="ManualLocation"
        component={ManualLocation}
      />
      <Stack.Screen
        options={{ headerShown: false, gestureEnabled: false }}
        name="AllowNotify"
        component={AllowNotify}
      />
      <Stack.Screen
        options={{ headerShown: false, gestureEnabled: false }}
        name="Home"
        component={HomeNavigator}
      />
      <Stack.Screen
        options={{ headerShown: false, gestureEnabled: false }}
        name="Searchbar"
        component={Searchbar}
      />
      <Stack.Screen
        options={{ headerShown: false, gestureEnabled: false }}
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
      <Stack.Screen
        options={{ headerShown: false, gestureEnabled: false }}
        name="Camera"
        component={CameraScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
