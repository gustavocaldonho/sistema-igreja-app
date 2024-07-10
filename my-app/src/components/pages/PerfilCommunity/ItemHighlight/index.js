import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

export default function ItemHighlight(props) {
  return (
    <View style={[props.style, styles.itemHighlightInformation]}>
      <Text style={styles.numberHighlight}>{props.number}</Text>
      <Text style={styles.textHighlight}>{props.label}</Text>
    </View>
  );
}
