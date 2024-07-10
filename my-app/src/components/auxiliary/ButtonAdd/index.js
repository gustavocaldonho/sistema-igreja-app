import React from "react";
import { TouchableHighlight, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function ButtonAdd({ onPress }) {
  return (
    <TouchableHighlight
      style={styles.boxButtonAdd}
      underlayColor={"#358DD4"}
      onPress={onPress}
    >
      <FontAwesome5 name="plus" style={styles.iconAdd} />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  boxButtonAdd: {
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 20,
    right: 30,
    alignSelf: "center",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#287BBF",
  },

  iconAdd: {
    fontSize: 20,
    color: "#fff",
  },
});
