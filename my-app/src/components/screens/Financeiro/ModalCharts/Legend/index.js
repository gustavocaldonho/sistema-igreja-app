import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style.js";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Legend({ data }) {
  return (
    <View style={styles.legendContainer}>
      {data.map((item, index) => (
        <View key={index} style={styles.legendItem}>
          <Icon name="circle" style={styles.legendIcon} color={item.color} />
          <Text
            style={styles.legendText}
          >{`${item.text} - ${item.caption}`}</Text>
        </View>
      ))}
    </View>
  );
}
