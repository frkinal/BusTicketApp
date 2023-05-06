import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import style from "./style";

export const Button = ({ text, onpress, preset = "primary" }) => {
  return (
    <TouchableOpacity style={style[preset].container} onPress={onpress}>
      <Text style={style[preset].text}>{text}</Text>
    </TouchableOpacity>
  );
};
