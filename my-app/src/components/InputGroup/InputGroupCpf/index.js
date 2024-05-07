import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaskInput from "react-native-mask-input";
import styles from "../style";

const CPF_MASK = [
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];

const InputGroupCpf = ({ iconName, placeholder, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxIcon}>
        <Icon name={iconName} size={20} color="#adadad" style={styles.icon} />
      </View>
      <MaskInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType="numeric"
        maxLength={14}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#ccc"
        mask={(text) => {
          if (text.replace(/\D+/g, "").length <= 11) {
            return CPF_MASK;
          } else {
          }
        }}
      />
    </View>
  );
};

export default InputGroupCpf;
