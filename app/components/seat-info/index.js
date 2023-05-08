import React, { useEffect, useState } from "react";
import { Modal, Text, TouchableWithoutFeedback, View } from "react-native";

import { Button, TextInput } from "../";
import { Picker } from "@react-native-picker/picker";

import style from "./style";

export default function SeatInfo({ item, onChange }) {
  const { seatNo } = item;
  const [identity, setIdentity] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const changeModalVisible = () => setModalVisible(!modalVisible);
  useEffect(() => {
    if (identity.length === 11 && selectedGender !== "")
      onChange(identity, selectedGender);
  }, [selectedGender, identity]);

  return (
    <View style={style.container}>
      <View style={style.input_container}>
        <TextInput
          value={identity}
          setValue={setIdentity}
          placeholder="Kimlik No"
          maxLength={11}
          keyboardType="number-pad"
        />
      </View>
      {Platform.OS === "android" ? (
        <Picker
          style={style.picker}
          mode="dropdown"
          dropdownIconColor="#f6f6f6"
          selectedValue={selectedGender}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedGender(itemValue);
            setModalVisible(false);
          }}
        >
          <Picker.Item label="Erkek" value="Erkek" />
          <Picker.Item label="Kadin" value="Kadin" />
        </Picker>
      ) : (
        <View style={style.button_container}>
          <Button
            text={selectedGender ? selectedGender : "Cinsiyet"}
            onpress={changeModalVisible}
            preset="picker"
          />
        </View>
      )}
      <View style={style.seat_text_container}>
        <Text>Koltuk No: {seatNo}</Text>
      </View>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <TouchableWithoutFeedback onPress={changeModalVisible}>
          <View style={style.modal_container}>
            <TouchableWithoutFeedback>
              <View style={style.inner_modal_container}>
                <Picker
                  mode="dropdown"
                  dropdownIconColor="white"
                  selectedValue={selectedGender}
                  onValueChange={(itemValue, itemIndex) => {
                    setSelectedGender(itemValue);
                    setModalVisible(false);
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
    </View>
  );
}
