import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./style";

export default function ItemMenu({ screenName, onPress, icon }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.boxOption}
    >
      {["cross", "church"].includes(icon) ? (
        <FontAwesome5 name={icon} style={styles.icon} />
      ) : (
        <Icon name={icon} style={styles.icon} />
      )}
      <Text style={styles.textOption}>{screenName}</Text>
    </TouchableOpacity>
  );
}
