import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

import style from "./style";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { Button, TextInput } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RegisterScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [identity, setIdentity] = useState("");
  const [selectedGender, setSelectedGender] = useState();
  const [date, setDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setModalVisible(false);
    setDate(currentDate);
  };

  const changeModalVisible = () => setModalVisible(!modalVisible);
  const changeSecondModalVisible = () =>
    setSecondModalVisible(!secondModalVisible);

  const login = () => navigation.goBack();

  const register = async () => {
    if (name.length === 0) {
      Alert.alert("Hata", "Ad alanı zorunludur!");
      return;
    }
    if (surname.length === 0) {
      Alert.alert("Hata", "Soyad alanı zorunludur!");
      return;
    }
    if (mail.length === 0) {
      Alert.alert("Hata", "E-mail alanı zorunludur!");
      return;
    }
    if (password.length === 0) {
      Alert.alert("Hata", "Şifre alanı zorunludur!");
      return;
    }
    if (rePassword.length === 0) {
      Alert.alert("Hata", "Tekrar şifre alanı zorunludur!");
      return;
    }
    if (identity.length === 0) {
      Alert.alert("Hata", "Kimlik no alanı zorunludur!");
      return;
    }
    if (date.length === 0) {
      Alert.alert("Hata", "Doğum tarihi alanı zorunludur!");
      return;
    }
    if (selectedGender.length === 0) {
      Alert.alert("Hata", "Cinsiyet alanı zorunludur!");
      return;
    }
    if (password !== rePassword) {
      Alert.alert("Hata", "Şifreler uyuşmuyor!");
      return;
    }
    try {
      var keys = await AsyncStorage.getAllKeys();
    } catch (error) {
      console.log(error);
    }
    const haveKey = keys.find((item) => item === `@${identity}`);
    if (haveKey) {
      Alert.alert("Hata", "Bu kimlik numarasıyla zaten bir hesap var!");
      return;
    }
    keys.map(async (item, index) => {
      await AsyncStorage.getItem(item).then((session) => {
        if (session !== null) {
          if (mail === JSON.parse(session).mail) {
            Alert.alert("Hata", "Bu E-mail adresiyle zaten bir hesap var!");
            return;
          }
        }
      });
    });
    const data = JSON.stringify({
      name,
      surname,
      mail,
      password,
      identity,
      selectedGender,
      date,
    });
    try {
      await AsyncStorage.setItem(`@${identity}`, data);
      Alert.alert(
        "Bilgilendirme",
        "Hesabınız başarıyla oluşturuldu. Giriş yap sayfasına yönlendirilmek için Tamam'a basınız.",
        [
          {
            text: "Tamam",
            onPress: () => {
              navigation.goBack();
            },
          },
        ]
      );
    } catch (error) {
      Alert.alert("Hata", "Bir şeyler ters gitti...");
    }
  };

  return (
    <ScrollView style={style.container}>
      <View style={style.logo_container}>
        <Text children="Gel Al" style={style.logo_text} />
        <Text children="Bilet" style={style.logo_sec_text} />
      </View>
      <View style={style.form_container}>
        <TextInput value={name} setValue={setName} placeholder="Ad" />
        <TextInput value={surname} setValue={setSurname} placeholder="Soyad" />
        <TextInput
          value={identity}
          setValue={setIdentity}
          placeholder="Kimlik No"
        />
        <Button
          text={
            date.toDateString() === new Date().toDateString()
              ? "Doğum Tarihi"
              : date.toDateString()
          }
          onpress={changeModalVisible}
          preset="picker"
        />
        <Button
          text={selectedGender ? selectedGender : "Cinsiyet"}
          onpress={changeSecondModalVisible}
          preset="picker"
        />

        <TextInput value={mail} setValue={setMail} placeholder="E-Mail" />
        <TextInput
          value={password}
          setValue={setPassword}
          placeholder="Password"
          isPassword
        />
        <TextInput
          value={rePassword}
          setValue={setRePassword}
          placeholder="Password"
          isPassword
        />
        <View style={style.button_container}>
          <Button text="Kayıt Ol" onpress={register} />
          <Button text="Giriş Yap" onpress={login} preset="white" />
        </View>
      </View>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <TouchableWithoutFeedback onPress={changeModalVisible}>
          <View style={style.modal_container}>
            <TouchableWithoutFeedback>
              <View style={style.inner_modal_container}>
                <DateTimePicker
                  testID="dateTimePicker"
                  display="spinner"
                  value={date}
                  mode="date"
                  onChange={onChange}
                  textColor="black"
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        visible={secondModalVisible}
        animationType="fade"
        transparent={true}
      >
        <TouchableWithoutFeedback onPress={changeSecondModalVisible}>
          <View style={style.modal_container}>
            <TouchableWithoutFeedback>
              <View style={style.inner_second_modal_container}>
                <Picker
                  mode="dropdown"
                  selectedValue={selectedGender}
                  onValueChange={(itemValue, itemIndex) => {
                    setSelectedGender(itemValue);
                    setSecondModalVisible(false);
                  }}
                >
                  <Picker.Item label="Erkek" value="Erkek" />
                  <Picker.Item label="Kadin" value="Kadin" />
                </Picker>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ScrollView>
  );
}
