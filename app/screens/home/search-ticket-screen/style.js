import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
