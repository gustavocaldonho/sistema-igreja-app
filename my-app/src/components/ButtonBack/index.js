import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ButtonBack({ navigation, color }) {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon
        name="chevron-left"
        size={25}
        color={color}
        style={{ padding: 20 }}
        // style={{ padding: 20, borderWidth: 1 }}
      />
    </TouchableOpacity>
  );
}
