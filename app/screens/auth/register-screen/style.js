import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  logo_container: {
    width: 100,
    height: 100,
    borderRadius: 20,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    marginTop: "5%",
  },
  logo_text: {
    fontSize: 15,
    color: "white",
  },
  logo_sec_text: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  form_container: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: "5%",
  },
  button_container: {
    width: "100%",
    paddingVertical: "5%",
  },
  modal_container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  inner_modal_container: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  inner_second_modal_container: {
    width: "90%",
    alignSelf: "center",
    height: 200,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
