import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";

const CheckInput = ({ isChecked }) => {
  const [checked, setChecked] = useState(isChecked ?? false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
    if (!checked) console.log("Checked");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleChecked} style={styles.checkbox}>
        {checked ? (
          <Ionicons name="checkbox-outline" size={24} color="#287BBF" />
        ) : (
          <Ionicons name="square-outline" size={24} color="#aaa" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CheckInput;
