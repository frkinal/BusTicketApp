import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStack, HomeStack } from "./";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
export const AppStack = () => {
  const isLoggedIn = false;
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
};
