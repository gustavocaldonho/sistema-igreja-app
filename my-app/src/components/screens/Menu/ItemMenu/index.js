import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./style";

export default function ItemMenu({ screenName, onPress, icon }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={styles.boxOption}
      >
        {["cross", "church", "broom"].includes(icon) ? (
          <FontAwesome5 name={icon} style={styles.icon} />
        ) : (
          <Icon name={icon} style={styles.icon} />
        )}
      </TouchableOpacity>
      <Text style={styles.textOption}>{screenName}</Text>
    </View>
  );
}
