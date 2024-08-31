import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaskInput from "react-native-mask-input";

const InputGroupValorDizimo = ({ placeholder, value, onChangeText, style }) => {
  return (
    <View style={[style, styles.container]}>
      <View>
        <Text style={styles.iconMoney}>R$</Text>
      </View>
      <MaskInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType="numeric"
        maxLength={15}
        value={value}
        placeholderTextColor="#ccc"
        onChangeText={onChangeText}
        // mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "70%",
    marginTop: 10,
    alignSelf: "center",
    flexDirection: "row",
    paddingBottom: 5,
    justifyContent: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
  },
  iconMoney: {
    fontSize: 25,
    marginRight: 10,
  },
  input: {
    fontSize: 25,
  },
});

export default InputGroupValorDizimo;
