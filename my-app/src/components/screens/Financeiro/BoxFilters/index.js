import React from "react";
import { View, Platform } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import styles from "./style";

export default function BoxFilters({
  options,
  selectedValue,
  onValueChange,
  style,
}) {
  return (
    <View style={[styles.container, style]}>
      <RNPickerSelect
        value={`${selectedValue.month}|${selectedValue.year}`}
        onValueChange={(value) => {
          if (value) {
            const [month, year] = value.split("|");
            onValueChange({ month, year });
          }
        }}
        items={options.map((option) => ({
          label: `${option.label} / ${option.year}`,
          value: `${option.value}|${option.year}`,
        }))}
        style={{
          inputIOS: styles.labelPicker,
          inputAndroid: styles.labelPicker,
        }}
        placeholder={{ label: "Selecione um mês", value: null }}
        useNativeAndroidPickerStyle={false}
        doneText="Confirmar"
      />
    </View>
  );
}
