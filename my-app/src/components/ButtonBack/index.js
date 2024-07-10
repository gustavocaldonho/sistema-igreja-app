import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ButtonBack({ navigation, color }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.boxIcon}
    >
      <Icon name="chevron-left" size={25} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boxIcon: {
    position: "absolute",
    left: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
