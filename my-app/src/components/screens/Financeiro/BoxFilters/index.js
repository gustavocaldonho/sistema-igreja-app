import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./style";

export default function BoxFilters({
  options,
  selectedValue,
  onValueChange,
  style,
}) {
  return (
    <View style={[styles.container, style]}>
      <Picker
        // style={styles.boxPicker}
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        {options.map((option, index) => (
          <Picker.Item
            style={styles.labelPicker}
            key={index}
            label={`${option.label} / ${option.year}`}
            value={option.value}
          />
        ))}
      </Picker>
    </View>
  );
}
