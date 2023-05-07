import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inner_container: {
    width: "90%",
    alignSelf: "center",
  },
  modal_container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  inner_modal_container: {
    width: "90%",
    alignSelf: "center",
    height: 200,
    backgroundColor: "white",
    borderRadius: 10,
  },
  radio_button_container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  radio_button: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  picker_container: {
    width: "100%",
  },
  inner_picker_container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    flex: 1,
    width: "100%",
    height: 50,
    paddingLeft: 10,
    backgroundColor: "#f6f6f6",
    color: "black",
    borderRadius: 10,
    alignItems: "flex-start",
    marginVertical: 5,
  },
  picker_text: {
    width: "25%",
  },
  date_container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inner_date_container: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  button_container: {
    width: "35%",
    alignSelf: "flex-end",
    marginVertical: "5%",
  },
  calendar_modal_container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "flex-end",
  },
  inner_calendar_modal_container: {
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: "white",
    backgroundColor: "gray",
    paddingVertical: "2%",
  },
});
