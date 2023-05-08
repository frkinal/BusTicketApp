import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input_container: {
    width: "35%",
  },
  picker: {
    width: "35%",
    height: 50,
    paddingLeft: 10,
    backgroundColor: "#f6f6f6",
    color: "black",
    borderRadius: 10,
    alignItems: "flex-start",
    marginVertical: 5,
  },
  button_container: {
    width: "35%",
  },
  seat_text_container: {
    width: "25%",
    alignItems: "flex-start",
    justifyContent: "center",
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
});
