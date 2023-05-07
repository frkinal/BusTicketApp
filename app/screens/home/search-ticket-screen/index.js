import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  Platform,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import style from "./style";
import { Button, Logo, CalendarPicker } from "../../../components";
import { useNavigation } from "@react-navigation/native";

export default function SearchTicketScreen() {
  const navigation = useNavigation();
  const [selectedCity, setselectedCity] = useState(0);
  const [selectedCityName, setselectedCityName] = useState("");
  const [selectedSecondCity, setSelectedSecondCity] = useState(0);
  const [selectedSecondCityName, setSelectedSecondCityName] = useState("");
  const [selectedRequestDate, setSelectedRequestDate] = useState(new Date());
  const [selectedRequestDateText, setSelectedRequestDateText] = useState("");
  const [selectedSecondRequestDate, setSelectedSecondRequestDate] = useState(
    new Date()
  );
  const [selectedSecondRequestDateText, setSelectedSecondRequestDateText] =
    useState("");
  const [selectedDate, setSelectedDate] = useState(false);
  const [selectedSecondDate, setSelectedSecondDate] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  const [secondCalendarModalVisible, setSecondCalendarModalVisible] =
    useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);
  const [cityData, setCityData] = useState([]);
  const [townData, setTownData] = useState([]);
  const [isActive, setIsActive] = useState(1);
  useEffect(() => {
    if (selectedRequestDate !== new Date()) {
      const day = JSON.stringify(selectedRequestDate).slice(9, 11);
      const month = JSON.stringify(selectedRequestDate).slice(6, 8);
      const year = JSON.stringify(selectedRequestDate).slice(1, 5);
      setSelectedRequestDateText(day + "-" + month + "-" + year);
    }
    if (selectedSecondRequestDate !== new Date()) {
      const day = JSON.stringify(selectedSecondRequestDate).slice(9, 11);
      const month = JSON.stringify(selectedSecondRequestDate).slice(6, 8);
      const year = JSON.stringify(selectedSecondRequestDate).slice(1, 5);
      setSelectedSecondRequestDateText(day + "-" + month + "-" + year);
    }
  }, [selectedRequestDate, selectedSecondRequestDate]);
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
  const onDateChange = (date) => {
    setSelectedRequestDate(date);
    setSelectedDate(true);
  };
  const secondOnDateChange = (date) => {
    setSelectedSecondRequestDate(date);
    setSelectedSecondDate(true);
  };

  useEffect(() => {
    if (selectedCity != 0) {
      cityData?.map((item, index) => {
        if (item.id === selectedCity) {
          setselectedCityName(item.name);
        }
      });
    }
  }, [selectedCity]);

  useEffect(() => {
    if (selectedSecondCity != 0) {
      cityData?.map((item, index) => {
        if (item.id === selectedSecondCity) {
          setSelectedSecondCityName(item.name);
        }
      });
    }
  }, [selectedSecondCity]);

  const changeModalVisible = () => setModalVisible(!modalVisible);
  const changeCalendarModalVisible = () =>
    setCalendarModalVisible(!calendarModalVisible);
  const changeSecondCalendarModalVisible = () =>
    setSecondCalendarModalVisible(!secondCalendarModalVisible);
  const changeSeconModalVisible = () =>
    setSecondModalVisible(!secondModalVisible);
  const changeActivate = (val) => setIsActive(val);
  const search = () => {
    if (selectedRequestDateText === "") {
      Alert.alert("Hata", "Gidiş tarihinizi seçiniz.");
      return;
    }
    if (isActive === 2) {
      if (selectedSecondRequestDateText === "") {
        Alert.alert("Hata", "Dönüş tarihinizi seçiniz.");
        return;
      }
    }
    if (selectedCity === 0) {
      Alert.alert("Hata", "İl seçiniz.");
      return;
    }
    if (selectedSecondCity === 0) {
      Alert.alert("Hata", "İlçe seçiniz.");
      return;
    }
    navigation.navigate("choose-expedition-screen", { isActive });
  };
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
          <View style={style.inner_picker_container}>
            <Text style={style.picker_text}>Nereden: </Text>
            {Platform.OS === "android" ? (
              <Picker
                mode="dropdown"
                selectedValue={selectedCity}
                style={style.picker}
                placeholder="......"
                onValueChange={(itemValue, itemIndex) => {
                  setselectedCity(itemValue);
                  setModalVisible(false);
                }}
              >
                {cityData?.map((item, index) => (
                  <Picker.Item label={item?.name} value={item?.id} />
                ))}
              </Picker>
            ) : (
              <Button
                text={selectedCityName !== "" ? selectedCityName : ".........."}
                preset="picker"
                onpress={changeModalVisible}
              />
            )}
          </View>
          <View style={style.inner_picker_container}>
            <Text style={style.picker_text}>Nereye: </Text>
            {Platform.OS === "android" ? (
              <Picker
                mode="dropdown"
                style={style.picker}
                placeholder=".........."
                selectedValue={selectedSecondCity}
                onValueChange={(itemValue, itemIndex) => {
                  setSelectedSecondCity(itemValue);
                  setSecondModalVisible(false);
                }}
              >
                {cityData?.map((item, index) => (
                  <Picker.Item label={item?.name} value={item?.id} />
                ))}
              </Picker>
            ) : (
              <Button
                text={
                  selectedSecondCityName !== ""
                    ? selectedSecondCityName
                    : ".........."
                }
                preset="picker"
                onpress={changeSeconModalVisible}
              />
            )}
          </View>
        </View>
        <View style={style.date_container}>
          <TouchableOpacity
            onPress={changeCalendarModalVisible}
            style={[
              style.inner_date_container,
              isActive === 1 && { width: "100%" },
            ]}
          >
            <Text>Gidiş Tarihi</Text>
            <Text>{selectedDate ? selectedRequestDateText : "Seçiniz"}</Text>
          </TouchableOpacity>
          {isActive !== 1 && (
            <TouchableOpacity
              onPress={changeSecondCalendarModalVisible}
              style={style.inner_date_container}
            >
              <Text>Dönüş Tarihi</Text>
              <Text>
                {selectedSecondDate ? selectedSecondRequestDateText : "Seçiniz"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={style.button_container}>
          <Button text="Ara" onpress={search} />
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
                  {townData !== undefined && (
                    <Picker
                      mode="dropdown"
                      selectedValue={selectedSecondCity}
                      onValueChange={(itemValue, itemIndex) => {
                        setSelectedSecondCity(itemValue);
                        setSecondModalVisible(false);
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
        <CalendarPicker
          changeModalVisible={changeCalendarModalVisible}
          onDateChange={onDateChange}
          modalVisible={calendarModalVisible}
        />
        <CalendarPicker
          changeModalVisible={changeSecondCalendarModalVisible}
          onDateChange={secondOnDateChange}
          modalVisible={secondCalendarModalVisible}
        />
      </View>
    </View>
  );
}
