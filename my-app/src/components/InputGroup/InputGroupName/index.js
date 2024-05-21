import React from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../style";

const InputGroupName = ({ iconName, placeholder }) => {
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
      />
    </View>
  );
};

export default InputGroupName;
