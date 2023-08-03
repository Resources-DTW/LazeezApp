import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import OrderScreen from "../screens/OrderScreen";

const Stack = createNativeStackNavigator();

const OrderNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="OrderScreen"
        component={OrderScreen}
      />
    </Stack.Navigator>
  );
};

export default OrderNavigation;
