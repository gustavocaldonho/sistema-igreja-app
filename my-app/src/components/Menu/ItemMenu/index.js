import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./style";

export default function ItemMenu({
  navigation,
  nameIcon,
  screenName,
  screenNavigate,
  style,
}) {
  return (
    <TouchableOpacity
      style={style}
      onPress={() => navigation.navigate({ screenNavigate })}
    >
      <Icon name={nameIcon} style={styles.icon} />
      <Text style={styles.textOption}>{screenName}</Text>
    </TouchableOpacity>
  );
}
