import React from "react";
import { TouchableHighlight } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./style";

export default function ButtonAdd() {
  return (
    <TouchableHighlight
      style={styles.boxButtonAdd}
      underlayColor={"#2893CC"}
      onPress={() => console.log("+")}
    >
      <FontAwesome5 name="plus" style={styles.iconAdd} />
    </TouchableHighlight>
  );
}
