import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

const CheckoutNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="CartScreen"
        component={CartScreen}
      />
    </Stack.Navigator>
  );
};

export default CheckoutNavigator;
