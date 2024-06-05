import React from "react";
import { View, Text, Pressable, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ItemCommunity(props) {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.boxItem}>
        <View style={styles.boxIconLeft}>
          <Icon name="user" style={styles.iconCommunity} />
        </View>
        <View style={styles.boxName}>
          <Text style={styles.textName}>{props.nameCommunity}</Text>
        </View>
        <View style={styles.boxIconRight}>
          <Icon name="chevron-right" style={styles.iconRight} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
