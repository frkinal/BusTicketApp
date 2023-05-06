import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import style from "./style";
import { Button, TextInput } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { changeAuhtentication } from "../../../redux/auth-slice";

export default function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const login = async () => {
    try {
      var keys = await AsyncStorage.getAllKeys();
      keys.map(async (item, index) => {
        await AsyncStorage.getItem(item).then(async (session) => {
          if (session !== null) {
            if (mail !== JSON.parse(session).mail) {
              Alert.alert("Hata", "Bu E-mail adresiyle bir hesap yok!");
              return;
            } else {
              if (password !== JSON.parse(session).password) {
                Alert.alert("Hata", "Yanlış şifre girdiniz");
                return;
              } else {
                dispatch(changeAuhtentication());
              }
            }
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  const register = () => navigation.navigate("register-screen");
  return (
    <ScrollView style={style.container}>
      <View style={style.logo_container}>
        <Text children="Gel Al" style={style.logo_text} />
        <Text children="Bilet" style={style.logo_sec_text} />
      </View>
      <View style={style.form_container}>
        <TextInput
          icon="mail"
          value={mail}
          setValue={setMail}
          placeholder="E-Mail"
        />
        <TextInput
          value={password}
          setValue={setPassword}
          placeholder="Password"
          isPassword
          icon="key"
        />
        <View style={style.button_container}>
          <Button text="Giriş Yap" onpress={login} />
          <Button text="Kayıt Ol" onpress={register} preset="white" />
        </View>
      </View>
    </ScrollView>
  );
}
