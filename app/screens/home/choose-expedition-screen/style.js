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
  render_item_container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: "3%",
    borderBottomWidth: 1,
  },
  render_item_left_container: {
    width: "20%",
    paddingHorizontal: "3%",
  },
  logo_container: {
    width: 55,
    height: 55,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  logo_text: {
    fontSize: 14,
    color: "white",
  },
  render_item_middle_container: {
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  render_item_right_container: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
});
