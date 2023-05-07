import React from "react";
import { View, Modal, TouchableWithoutFeedback } from "react-native";
import RNCalendarPicker from "react-native-calendar-picker";
import style from "./style";
export default function CalendarPicker({
  modalVisible,
  changeModalVisible,
  onDateChange,
}) {
  return (
    <Modal visible={modalVisible} animationType="fade" transparent={true}>
      <TouchableWithoutFeedback onPress={changeModalVisible}>
        <View style={style.calendar_modal_container}>
          <TouchableWithoutFeedback>
            <View style={style.inner_calendar_modal_container}>
              <RNCalendarPicker
                startFromMonday={true}
                onDateChange={onDateChange}
                monthTitleStyle={{ fontSize: 20, color: "white" }}
                yearTitleStyle={{ fontSize: 20, color: "white" }}
                dayLabelsWrapper={{
                  borderWidth: 0,
                  borderColor: "transparent",
                }}
                dayShape="square"
                nextTitle=">"
                nextTitleStyle={{
                  fontSize: 20,
                  color: "white",
                  fontWeight: "bold",
                }}
                previousTitle="<"
                previousTitleStyle={{
                  fontSize: 20,
                  color: "white",
                  fontWeight: "bold",
                }}
                selectedDayStyle={{
                  backgroundColor: "red",
                }}
                selectedDayTextStyle={{
                  color: "black",
                }}
                selectedDayColor={"red"}
                enableDateChange
                todayBackgroundColor={"gray"}
                todayTextStyle={{ color: "red" }}
                textStyle={{
                  color: "white",
                }}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
