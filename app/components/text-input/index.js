import React, { useState } from "react";
import {
  View,
  TextInput as RNTextInput,
  TouchableWithoutFeedback,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import style from "./style";

export default function TextInput({
  icon,
  isPassword,
  placeholder,
  value,
  setValue,
}) {
  const [visible, setVisible] = useState(false);
  const [isFocused, setİsFocused] = useState(false);
  const chanceVisible = () => {
    setVisible(!visible);
  };
  return (
    <View
      style={[style.container, { borderColor: isFocused ? "red" : "gray" }]}
    >
      {icon && (
        <View style={style.leftIcon}>
          <Ionicons color="red" name={icon} size={25} />
        </View>
      )}
      <RNTextInput
        style={style.input}
        secureTextEntry={isPassword && !visible}
        onFocus={() => setİsFocused(true)}
        onBlur={() => setİsFocused(false)}
        placeholder={placeholder}
        placeholderTextColor="black"
        selectionColor="red"
        autoCapitalize="none"
        value={value}
        onChangeText={setValue}
      />
      {isPassword && (
        <TouchableWithoutFeedback onPress={chanceVisible}>
          <View style={style.rightIcon}>
            <Ionicons
              size={25}
              color={!isFocused ? "red" : "black"}
              name={!visible ? "eye" : "eye-off"}
            />
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}
