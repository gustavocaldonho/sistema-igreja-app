import React from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../style";
import MaskInput from "react-native-mask-input";

const DN_MASK = [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/];

const InputGroupDN = ({ iconName, placeholder, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxIcon}>
        <Icon name={iconName} size={20} color="#adadad" style={styles.icon} />
      </View>
      <MaskInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType="numeric"
        maxLength={10}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#ccc"
        mask={DN_MASK}
      />
    </View>
  );
};

export default InputGroupDN;
