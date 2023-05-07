import { View, Text } from "react-native";
import React from "react";

import style from "./style";

export default function Logo() {
  return (
    <View style={style.logo_container}>
      <Text children="Gel Al" style={style.logo_text} />
      <Text children="Bilet" style={style.logo_sec_text} />
    </View>
  );
}
