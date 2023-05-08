import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import SeatsLayout from "@mindinventory/react-native-bus-seat-layout";
import style from "./style";
import { Button, SeatInfo } from "../../../components";
export default function ExpeditionDetailsScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const {
    item: { price },
  } = route.params;
  const [seat, setSeat] = useState([]);
  const [ticketInfo, setTicketInfo] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const renderItem = ({ item }) => {
    const onChange = (identity, selectedGender) => {
      const data = {
        identity,
        selectedGender,
        price,
      };
      setTicketInfo([...ticketInfo, data]);
    };
    return <SeatInfo item={item} onChange={onChange} />;
  };
  useEffect(() => {
    var total = 0;
    ticketInfo?.map((item, index) => {
      total += item.price;
    });
    setTotalPrice(total);
  }, [ticketInfo]);

  const navigatePaymentScreen = () =>
    navigation.navigate("payment-screen", { totalPrice });
  return (
    <View style={style.container}>
      <View style={style.seat_container}>
        <SeatsLayout
          row={14}
          layout={{ columnOne: 2, columnTwo: 2 }}
          selectedSeats={[
            { seatNumber: 1, seatType: "booked" },
            { seatNumber: 11, seatType: "women" },
            { seatNumber: 17, seatType: "women" },
            { seatNumber: 43, seatType: "blocked" },
          ]}
          numberTextStyle={{ fontSize: 12 }}
          seatImage={{
            image: {
              uri: "https://raw.githubusercontent.com/Mindinventory/react-native-bus-seat-layout/main/src/assets/seat1.png",
            },
            tintColor: "#B2B2B2",
          }}
          getBookedSeats={setSeat}
        />
      </View>
      <FlatList
        data={seat}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        contentContainerStyle={style.form_container}
        ListFooterComponent={
          <View style={style.button_container}>
            <Button text={`${totalPrice} ₺`} onpress={navigatePaymentScreen} />
          </View>
        }
      />
    </View>
  );
}
