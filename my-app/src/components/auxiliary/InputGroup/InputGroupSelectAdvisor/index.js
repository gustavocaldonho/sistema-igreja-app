import React from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./style";

const InputGroupSelectAdvisor = ({
  options,
  selectedValue,
  onValueChange,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.input}>
        <Picker
          style={styles.labelPicker}
          selectedValue={selectedValue}
          onValueChange={onValueChange}
        >
          {options.map((option, index) => (
            <Picker.Item
              style={styles.labelPicker}
              key={index}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default InputGroupSelectAdvisor;
