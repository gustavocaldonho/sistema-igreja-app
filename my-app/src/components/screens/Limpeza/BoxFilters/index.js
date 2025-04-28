import React from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./style";

export default function BoxFilters({ options, selectedValue, onValueChange }) {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={`${selectedValue.month}|${selectedValue.year}`}
        onValueChange={(value) => {
          const [month, year] = value.split("|");
          onValueChange({ month, year });
        }}
      >
        {options.map((option, index) => (
          <Picker.Item
            style={styles.labelPicker}
            key={index}
            label={`${option.label} / ${option.year}`}
            value={`${option.value}|${option.year}`}
          />
        ))}
      </Picker>
    </View>
  );
}
