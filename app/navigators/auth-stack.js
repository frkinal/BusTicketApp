import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, RegisterScreen } from "../screens";

const Stack = createNativeStackNavigator();
export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login-screen" component={LoginScreen} />
      <Stack.Screen name="register-screen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
