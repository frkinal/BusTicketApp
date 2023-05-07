import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import style from "./style";
import { Button, Logo } from "../../../components";

export default function SearchTicketScreen() {
  const [selectedCity, setselectedCity] = useState(0);
  const [selectedCityName, setselectedCityName] = useState("");

  const [selectedTown, setselectedTown] = useState(0);
  const [selectedTownName, setselectedTownName] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);
  const [cityData, setCityData] = useState([]);
  const [townData, setTownData] = useState([]);
  const [isActive, setIsActive] = useState(0);

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
    setTownData(jsonData?.data);
  }

  useEffect(() => {
    if (selectedCity != 0) {
      getTownData();
      cityData?.map((item, index) => {
        if (item.id === selectedCity) {
          setselectedCityName(item.name);
        }
      });
    }
  }, [selectedCity]);

  useEffect(() => {
    if (selectedTown != 0) {
      townData?.map((item, index) => {
        if (item.id === selectedTown) {
          setselectedTownName(item.name);
        }
      });
    }
  }, [selectedTown]);

  const changeModalVisible = () => setModalVisible(!modalVisible);
  const changeSeconModalVisible = () =>
    setSecondModalVisible(!secondModalVisible);
  const changeActivate = (val) => setIsActive(val);
  return (
    <View style={style.container}>
      <View style={style.inner_container}>
        <Logo />
        <View style={style.radio_button_container}>
          <View style={style.radio_button}>
            <Ionicons
              size={25}
              color="red"
              name={isActive === 1 ? "radio-button-on" : "radio-button-off"}
              onPress={() => changeActivate(1)}
            />
            <Text>Gidiş</Text>
          </View>
          <View style={style.radio_button}>
            <Ionicons
              size={25}
              color="red"
              name={isActive === 2 ? "radio-button-on" : "radio-button-off"}
              onPress={() => changeActivate(2)}
            />
            <Text>Gidiş-Dönüş</Text>
          </View>
        </View>
        <View style={style.picker_container}>
          <View style={style.picker}>
            <Text style={style.picker_text}>Nereden: </Text>
            <Button
              text={selectedCityName !== "" ? selectedCityName : ".........."}
              preset="picker"
              onpress={changeModalVisible}
            />
          </View>
          <View style={style.picker}>
            <Text style={style.picker_text}>Nereye: </Text>
            <Button
              text={selectedTownName !== "" ? selectedTownName : ".........."}
              preset="picker"
              onpress={changeSeconModalVisible}
              disabled={townData !== undefined}
            />
          </View>
        </View>
        <View style={style.date_container}>
          <View
            style={[
              style.inner_date_container,
              isActive === 1 && { width: "100%" },
            ]}
          >
            <Text>Gidiş Tarihi</Text>
          </View>
          {isActive !== 1 && (
            <View style={style.inner_date_container}>
              <Text>Dönüş Tarihi</Text>
            </View>
          )}
        </View>
        <View style={style.button_container}>
          <Button text="Ara" />
        </View>
        <Modal visible={modalVisible} animationType="fade" transparent={true}>
          <TouchableWithoutFeedback onPress={changeModalVisible}>
            <View style={style.modal_container}>
              <TouchableWithoutFeedback>
                <View style={style.inner_modal_container}>
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
          <TouchableWithoutFeedback onPress={changeSeconModalVisible}>
            <View style={style.modal_container}>
              <TouchableWithoutFeedback>
                <View style={style.inner_modal_container}>
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
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </View>
  );
}
