import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./style";
import CheckInput from "../CheckInput";

export default function ItemCleaning({}) {
  return (
    <View style={styles.content}>
      <View style={styles.boxName}>
        <Text style={styles.textName}>Item Limpeza</Text>
      </View>

      <View style={styles.boxCheck}>
        <CheckInput isChecked={true} />
      </View>
    </View>
  );
}
