import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

export default function LoadingIndicator({ navigation }) {
  return (
    <ActivityIndicator color={"#fff"} size={"large"} style={styles.indicator} />
  );
}

const styles = StyleSheet.create({
  indicator: {
    marginTop: 10,
  },
});
