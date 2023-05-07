import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import style from "./style";

export default function SearchTicketScreen() {
  const [selectedCity, setselectedCity] = useState(0);
  const [selectedCityName, setselectedCityName] = useState(0);

  const [selectedTown, setselectedTown] = useState(0);
  const [selectedTownName, setselectedTownName] = useState(0);

  const [modalVisible, setModalVisible] = useState(true);
  const [secondModalVisible, setSecondModalVisible] = useState(false);
  const [cityData, setCityData] = useState();
  const [townData, setTownData] = useState();

  async function getCityData() {
    const response = await fetch(
      "https://turkiyeapi.cyclic.app/api/v1/provinces"
    );
    const jsonData = await response.json();
    setCityData(jsonData?.data);
  }

  useEffect(() => {
    getCityData();
  }, []);

  async function getTownData() {
    const response = await fetch(
      `https://turkiyeapi.cyclic.app/api/v1/provinces/${selectedCity}`
    );
    const jsonData = await response.json();
    console.log(jsonData);
    setTownData(jsonData?.data);
  }

  useEffect(() => {
    if (selectedCity == 0) {
      getTownData();
      setModalVisible(false);
      setSecondModalVisible(true);
    }
  }, [selectedCity]);

  const changeModalVisible = () => setModalVisible(!modalVisible);
  const changeSeconModalVisible = () =>
    setSecondModalVisible(!secondModalVisible);
  return (
    <ScrollView style={style.container}>
      <Text>{JSON.stringify(cityData?.data)}</Text>
      {/* <Text>{JSON.stringify(townData?.data)}</Text> */}
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <TouchableWithoutFeedback onPress={changeModalVisible}>
          <View style={style.modal_container}>
            <TouchableWithoutFeedback>
              <View style={style.inner_modal_container}>
                {cityData !== undefined && (
                  <Picker
                    mode="dropdown"
                    selectedValue={selectedCity}
                    onValueChange={(itemValue, itemIndex) => {
                      setselectedCity(itemValue);
                      setModalVisible(false);
                    }}
                  >
                    {cityData?.map((item, index) => (
                      <Picker.Item label={item?.name} value={item?.id} />
                    ))}
                  </Picker>
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* <Modal
        visible={secondModalVisible}
        animationType="fade"
        transparent={true}
      >
        <TouchableWithoutFeedback onPress={changeSeconModalVisible}>
          <View style={style.modal_container}>
            <TouchableWithoutFeedback>
              <View style={style.inner_modal_container}>
                {townData !== undefined && (
                  <Picker
                    mode="dropdown"
                    selectedValue={selectedTown}
                    onValueChange={(itemValue, itemIndex) => {
                      setselectedTown(itemValue);
                      setSecondModalVisible(false);
                    }}
                  >
                    {townData?.map((item, index) => (
                      <Picker.Item label={item?.name} value={item?.id} />
                    ))}
                  </Picker>
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal> */}
    </ScrollView>
  );
}
