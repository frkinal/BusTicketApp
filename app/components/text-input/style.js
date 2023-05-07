import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#f6f6f6",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 10,
    width: "100%",
    alignSelf: "center",
  },
  input: {
    minHeight: 50,
    flex: 1,
    paddingLeft: 10,
    backgroundColor: "#f6f6f6",
    color: "black",
    maxHeight: 100,
    borderRadius: 10,
  },
  leftIcon: {
    width: 25,
    height: 25,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  rightIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 5,
  },
});
