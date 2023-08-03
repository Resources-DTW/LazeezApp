import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";

const Navigation = () => {
  // Replace with your authentication state management (e.g., React Context, Redux, or AsyncStorage)
  // const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
