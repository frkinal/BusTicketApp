import React from "react";
import { useSelector } from "react-redux";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStack, HomeStack } from "./";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
export default function AppStack() {
  const { isLoggedIn } = useSelector((state) => state?.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="home-stack" component={HomeStack} />
        ) : (
          <Stack.Screen name="auth-stack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
