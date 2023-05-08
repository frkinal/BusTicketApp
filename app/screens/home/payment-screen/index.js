import React from "react";
import { View, Alert } from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";
import style from "./style";
import { Button } from "../../../components";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function PaymentScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { totalPrice } = route.params;
  const onFocus = (field) => console.log("focusing", field);

  const onChange = (formData) =>
    console.log(JSON.stringify(formData, null, " "));
  const pay = () => {
    Alert.alert(
      "Bilgilendirme",
      `${totalPrice} tutarındaki ödeme alındı. Bizi tercih ettiğiniz için teşekkürler.`,
      [
        {
          text: "Tamam",
          onPress: () => {
            navigation.navigate("search-ticket-screen");
          },
        },
      ]
    );
  };
  return (
    <View style={style.container}>
      <CreditCardInput
        autoFocus
        requireName={true}
        requireCVC={true}
        requirePostalCode={true}
        validColor="black"
        invalidColor="red"
        placeholderColor="darkgray"
        labelStyle={{ color: "black", fontSize: 12 }}
        inputStyle={{ color: "black", fontSize: 16 }}
        onFocus={onFocus}
        onChange={onChange}
      />
      <View style={style.button_container}>
        <Button text="Ödemeyi Tamamla" onpress={pay} />
      </View>
    </View>
  );
}
