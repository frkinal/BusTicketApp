import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import style from "./style";
import { useNavigation } from "@react-navigation/native";

export default function ChooseExpeditionScreen() {
  const navigation = useNavigation();
  const expeditionData = [
    {
      id: 1,
      name: "frkinal",
      travelTime: 2,
      emptySeats: 13,
      price: 150,
    },
    {
      id: 2,
      name: "frkinal",
      travelTime: 2,
      emptySeats: 13,
      price: 150,
    },
    {
      id: 3,
      name: "frkinal",
      travelTime: 2,
      emptySeats: 13,
      price: 150,
    },
    {
      id: 4,
      name: "frkinal",
      travelTime: 2,
      emptySeats: 13,
      price: 150,
    },
  ];
  const renderItem = ({ item }) => {
    const { name, travelTime, emptySeats, price } = item;
    const navigateExpeditionDetails = () =>
      navigation.navigate("expedition-details-screen", { item });
    return (
      <TouchableOpacity
        onPress={navigateExpeditionDetails}
        style={style.render_item_container}
      >
        <View style={style.render_item_left_container}>
          <View style={style.logo_container}>
            <Text style={style.logo_text}>{name}</Text>
          </View>
        </View>
        <View style={style.render_item_middle_container}>
          <Text>Seyahat Süresi: {travelTime}</Text>
          <Text>Boş Koltuk: {emptySeats}</Text>
        </View>
        <View style={style.render_item_right_container}>
          <Text> Fiyat: {price}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={style.container}>
      <View style={style.inner_container}>
        <FlatList
          data={expeditionData}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
