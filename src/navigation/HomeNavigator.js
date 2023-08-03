import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ProfileNavigator from "./ProfileNavigator";
import OrderNavigation from "./OrderNavigation";
import CheckoutNavigator from "./CheckoutNavigator";

const Tab = createBottomTabNavigator();

export const HomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#F49F1C",
        tabBarInactiveTintColor: "#7B7A7A",
        tabBarLabelStyle: { fontWeight: "bold" },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CheckoutNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="shopping-bag" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
