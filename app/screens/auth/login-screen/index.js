import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import style from "./style";
import { Button, TextInput } from "../../../components";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
  const navigation = useNavigation();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {};
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
};
