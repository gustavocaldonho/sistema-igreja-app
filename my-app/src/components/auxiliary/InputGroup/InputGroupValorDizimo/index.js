import React from "react";
import { View, Text } from "react-native";
import MaskInput from "react-native-mask-input";
import styles from "../style";

const formatCurrency = (value) => {
  const numericValue = value.replace(/\D/g, "");
  const formattedValue = (numericValue / 100)
    .toFixed(2)
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return formattedValue;
};

const InputGroupValorDizimo = ({
  iconName,
  placeholder,
  value,
  onChangeText,
  style,
}) => {
  return (
    <View style={[style, styles.container]}>
      <View style={styles.boxIcon}>
        <Text style={[styles.icon, styles.iconMoney]}>R$</Text>
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

export default InputGroupValorDizimo;
