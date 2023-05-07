import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ChooseExpeditionScreen,
  ExpeditionDetailsScreen,
  PaymentScreen,
  SearchTicketScreen,
} from "../screens";

const Stack = createNativeStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="search-ticket-screen"
        component={SearchTicketScreen}
        options={{ headerTitle: "Bilet Ara" }}
      />
      <Stack.Screen
        name="choose-expedition-screen"
        component={ChooseExpeditionScreen}
        options={{ headerTitle: "Sefer Seç" }}
      />
      <Stack.Screen
        name="expedition-details-screen"
        component={ExpeditionDetailsScreen}
        options={{ headerTitle: "Sefer Detay" }}
      />
      <Stack.Screen
        name="payment-screen"
        component={PaymentScreen}
        options={{ headerTitle: "Ödeme Ekranı" }}
      />
    </Stack.Navigator>
  );
}
