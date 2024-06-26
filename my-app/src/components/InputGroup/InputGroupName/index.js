import React from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../style";

const InputGroupName = ({
  iconName,
  placeholder,
  defaultValue,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxIcon}>
        <Icon name={iconName} size={20} style={styles.icon} />
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType="default"
        placeholderTextColor="#ccc"
        defaultValue={defaultValue}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputGroupName;
