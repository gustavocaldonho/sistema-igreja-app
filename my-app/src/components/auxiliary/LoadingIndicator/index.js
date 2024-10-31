import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

export default function LoadingIndicator({
  navigation,
  color = "#fff",
  size = "large",
}) {
  return (
    <ActivityIndicator color={color} size={size} style={styles.indicator} />
  );
}

const styles = StyleSheet.create({
  indicator: {
    // marginTop: 10,
  },
});
