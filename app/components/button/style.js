import { StyleSheet } from "react-native";

const baseStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});

export default {
  primary: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
    },
    text: {
      ...baseStyle.text,
    },
  }),
  white: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      backgroundColor: "white",
    },
    text: {
      ...baseStyle.text,
      color: "red",
    },
  }),
  picker: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      minHeight: 50,
      flex: 1,
      paddingLeft: 10,
      backgroundColor: "#f6f6f6",
      color: "white",
      maxHeight: 100,
      borderRadius: 10,
      alignItems: "flex-start",
      marginVertical: 5,
    },
    text: {
      ...baseStyle.text,
      color: "black",
      fontSize: 13,
      fontWeight: "normal",
    },
  }),
};
