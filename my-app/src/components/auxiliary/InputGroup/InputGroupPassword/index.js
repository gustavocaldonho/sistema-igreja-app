import React from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../style";

const InputGroupPassword = ({
  iconName,
  placeholder,
  defaultValue,
  onChangeText,
  style,
}) => {
  return (
    <View style={[style, styles.container]}>
      <View style={styles.boxIcon}>
        <Icon name={iconName} size={20} style={styles.icon} />
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        placeholderTextColor="#ccc"
        secureTextEntry={true}
      />
    </View>
  );
};

export default InputGroupPassword;
