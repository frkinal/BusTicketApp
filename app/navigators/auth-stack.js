import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, RegisterScreen } from "../screens";

const Stack = createNativeStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login-screen"
        component={LoginScreen}
        options={{ headerTitle: "Giriş Yap" }}
      />
      <Stack.Screen
        name="register-screen"
        component={RegisterScreen}
        options={{ headerTitle: "Kayıt Ol" }}
      />
    </Stack.Navigator>
  );
}
