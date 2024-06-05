import React from "react";
import { View, Text, Pressable, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ItemCommunity(props) {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.boxItem}>
        <View style={styles.boxIconLeft}>
          <FontAwesome5 name="church" style={styles.icon} />
        </View>
        <View style={styles.boxInformation}>
          <View style={styles.boxPatron}>
            <Text style={styles.textPatron}>{props.patron}</Text>
          </View>
          <View style={styles.boxLocation}>
            <Text style={styles.textLocation}>{props.location}</Text>
          </View>
        </View>
        <View style={styles.boxIconRight}>
          <Icon name="chevron-right" style={styles.iconRight} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
