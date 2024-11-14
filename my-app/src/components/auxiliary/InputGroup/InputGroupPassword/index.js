import React, { useState } from "react";
import { View, TextInput, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../style";

const InputGroupPassword = ({
  iconName,
  placeholder,
  defaultValue,
  onChangeText,
  style,
}) => {
  const [security, setSecurity] = useState(true);
  const [nameIconEye, setNameIconEye] = useState("eye-slash");

  function changeSecurity() {
    setSecurity(false);
    setNameIconEye("eye");
    setTimeout(() => {
      setSecurity(true);
      setNameIconEye("eye-slash");
    }, 3000);
  }

  return (
    <View style={[style, styles.container]}>
      <View style={styles.boxIcon}>
        <Icon name={iconName} size={20} style={styles.icon} />
      </View>
      <TextInput
        style={[styles.input, styles.inputPassword]}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        placeholderTextColor="#ccc"
        secureTextEntry={security}
      />
      <View style={[styles.boxIcon, styles.boxIconRight]}>
        <TouchableWithoutFeedback onPress={changeSecurity}>
          <Icon name={nameIconEye} size={20} style={styles.icon} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default InputGroupPassword;
