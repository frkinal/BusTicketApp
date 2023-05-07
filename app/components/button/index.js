import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import style from "./style";

export default function Button({
  text,
  onpress,
  disabled,
  preset = "primary",
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={style[preset].container}
      onPress={onpress}
    >
      <Text style={style[preset].text}>{text}</Text>
    </TouchableOpacity>
  );
}
