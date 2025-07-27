import React from "react";
import { View, Platform, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "../style";

const InputGroupSelect = ({
  iconName,
  options,
  selectedValue,
  onValueChange,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxIcon}>
        <FontAwesome5 name={iconName} size={20} style={styles.icon} />
      </View>
      <View style={[styles.input, styles.inputPicker]}>
        <RNPickerSelect
          onValueChange={onValueChange}
          value={selectedValue}
          items={options}
          placeholder={{ label: "Selecione sua Comunidade...", value: "" }}
          useNativeAndroidPickerStyle={false}
          doneText="Confirmar"
          style={{
            inputIOS: styles.labelPicker,
            inputAndroid: styles.labelPicker,
            placeholder: { color: "#999" },
          }}
          Icon={() => (
            <FontAwesome5
              name="chevron-down"
              size={14}
              color="#999"
              style={{ marginRight: 10 }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default InputGroupSelect;
