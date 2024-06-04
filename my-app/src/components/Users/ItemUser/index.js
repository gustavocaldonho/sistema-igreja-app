import React from "react";
import { View, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";

export default function ItemUser(props) {
  return (
    <Pressable>
      <View style={styles.boxItem}>
        <View style={styles.boxIconLeft}>
          <Icon name="user" style={styles.iconUser} />
        </View>
        <View style={styles.boxName}>
          <Text style={styles.textName}>{props.nameUser}</Text>
        </View>
        <View style={styles.boxIconRight}>
          <Icon name="chevron-right" style={styles.iconRight} />
        </View>
      </View>
    </Pressable>
  );
}
