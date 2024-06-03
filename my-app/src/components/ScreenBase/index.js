import React from "react";
import { View } from "react-native";
import BoxLinearGradient from "./BoxLinearGradient";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";

export default function ScreenBase({ children, colorStatusBar }) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={colorStatusBar} />
      <BoxLinearGradient style={{ flex: 1 }}>
        <ScrollView>{children}</ScrollView>
      </BoxLinearGradient>
    </View>
  );
}
