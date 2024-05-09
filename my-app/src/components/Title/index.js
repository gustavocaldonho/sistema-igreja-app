import React from "react";
import { View, Text } from "react-native";
import styles from "./style.js";

export default function Title(props) {
  return (
    <View style={styles.boxTitle}>
      <View style={styles.boxLogo}></View>
      <Text style={styles.textTitle}>{props.textTitle}</Text>
    </View>
  );
}
