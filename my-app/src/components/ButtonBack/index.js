import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet } from "react-native";

export default function ButtonBack({ navigation, color }) {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={25} color={color} style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    paddingVertical: 10,
    paddingLeft: 20,
  },
});
