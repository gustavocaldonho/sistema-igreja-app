import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";

export default function ItemAviso({ title, message, viewed }) {
  return (
    // <View style={[styles.boxItem, styles.notRead]}>
    <View style={[styles.boxItem]}>
      <View style={styles.boxTitle}>
        <Text style={[styles.textTitle, styles.titleNotDisplayed]}>
          {title}
        </Text>
        {viewed ? <Icon name="circle" style={styles.iconNotDisplayed} /> : ""}
      </View>
      <View style={styles.boxBody}>
        <Text style={styles.textBody}>{message}</Text>
      </View>
    </View>
  );
}
