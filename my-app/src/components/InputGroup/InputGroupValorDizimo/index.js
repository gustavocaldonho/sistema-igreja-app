import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaskInput from "react-native-mask-input";
import styles from "../style";

// const MONEY_MASK = [
//   /[1-9]/,
//   /\d/,
//   /\d/,
//   ".",
//   /\d/,
//   /\d/,
//   /\d/,
//   ",",
//   /\d/,
//   /\d/,
// ];

const InputGroupValorDizimo = ({
  iconName,
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxIcon}>
        {/* <Icon name={iconName} size={20} style={styles.icon} /> */}
        <Text style={{ fontSize: 20 }}>R$</Text>
      </View>
      <MaskInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType="numeric"
        maxLength={10}
        value={value}
        placeholderTextColor="#ccc"
        onChangeText={onChangeText}
        // mask={MONEY_MASK}
      />
    </View>
  );
};

export default InputGroupValorDizimo;
