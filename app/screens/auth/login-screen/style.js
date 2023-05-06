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
    marginVertical: 50,
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
    paddingVertical: "15%",
  },
  button_container: {
    width: "100%",
    paddingVertical: "5%",
  },
});
