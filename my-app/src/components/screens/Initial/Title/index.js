import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style.js";

export default function Title(props) {
  return (
    <View style={styles.boxTitle}>
      <View style={styles.boxLogo}>
        <Image
          source={require("../../../../images/logo.png")}
          style={styles.logo}
        />
      </View>
      <Text style={styles.textTitle}>{props.textTitle}</Text>
    </View>
  );
}
