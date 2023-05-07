import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
