import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";

export default function itemAdvisor(props) {
  return (
    <View style={[props.style, styles.itemAdvisor]}>
      <TouchableOpacity style={styles.itemAdvisorLeft}>
        <Icon
          name="pencil-square-o"
          style={{ color: "#339DD7", fontSize: 25 }}
        />
      </TouchableOpacity>
      <View style={styles.itemAdvisorMiddle}>
        <Text style={styles.textNameAdvisor}>{props.name}</Text>
        <Text style={styles.positionAdvisor}>{props.position}</Text>
      </View>
      <TouchableOpacity style={styles.itemAdvisorRight}>
        <Icon name="trash-o" style={{ color: "#f094c0", fontSize: 25 }} />
      </TouchableOpacity>
    </View>
  );
}
