import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function BoxLinearGradient({ children }) {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        style={{ ...StyleSheet.absoluteFillObject }} //preenche todo o container pai
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0.1 }}
        colors={["#f094c0", "#339dd7"]}
      />
      {children}
    </View>
  );
}
