import React, { useState } from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "../style";

const InputGroupSelect = ({ iconName, options }) => {
  const [selectedComunity, setSelectedComunity] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.boxIcon}>
        <FontAwesome5
          name={iconName}
          size={20}
          color="#adadad"
          style={styles.icon}
        />
      </View>
      <View style={styles.input}>
        <Picker
          selectedValue={selectedComunity}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedComunity(itemValue)
          }
        >
          {options.map((option, index) => (
            <Picker.Item
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

export default InputGroupSelect;
