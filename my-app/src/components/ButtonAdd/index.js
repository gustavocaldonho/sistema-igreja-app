import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ButtonAdd() {
  return (
    <TouchableOpacity style={styles.boxButtonAdd} activeOpacity={0.7}>
      <FontAwesome5 name="plus" style={styles.iconAdd} />
    </TouchableOpacity>
  );
}
