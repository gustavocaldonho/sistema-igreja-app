import React from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";

const RadioButtonType = ({ selectedRadio, setSelectedRadio }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[
          styles.optionRadio,
          selectedRadio === "input" ? styles.selectedEntry : null,
        ]}
        onPress={() => setSelectedRadio("input")}
        underlayColor={"#C2C2C2"}
      >
        <Text style={styles.textRadio}>Entrada</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[
          styles.optionRadio,
          selectedRadio === "output" ? styles.selectedOut : null,
        ]}
        onPress={() => setSelectedRadio("output")}
        underlayColor={"#C2C2C2"}
      >
        <Text style={styles.textRadio}>Saída</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
    backgroundColor: "#ccc",
    overflow: "hidden",
    borderRadius: 5,
  },
  optionRadio: {
    width: "50%",
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textRadio: {
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
  },
  selectedOut: {
    backgroundColor: "#E57373",
  },
  selectedEntry: {
    backgroundColor: "#81C784",
  },
});

export default RadioButtonType;
