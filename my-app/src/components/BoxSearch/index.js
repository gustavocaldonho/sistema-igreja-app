import React from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

export default function BoxSearch() {
  return (
    <View style={styles.boxSearch}>
      <View style={styles.boxTextInput}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar..."
          placeholderTextColor="#B3E5FC"
        />
      </View>
      <View style={styles.boxIconSearch}>
        <Icon name="search" style={styles.iconSearch} />
      </View>
    </View>
  );
}
