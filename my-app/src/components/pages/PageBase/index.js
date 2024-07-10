import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";
import BoxLinearGradient from "./BoxLinearGradient";
import styles from "./style";
import ButtonAdd from "../../auxiliary/ButtonAdd";
import ButtonBack from "../../auxiliary/ButtonBack";

export default function PageBase({
  children,
  statusBarColor,
  title,
  signButtonAdd,
  onPressAdd,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={statusBarColor} />
      <View style={styles.boxHeader}>
        <ButtonBack color={"#339dd7"} />
        <Text style={styles.textTitle}>{title}</Text>
      </View>
      <View style={styles.innerContainer}>
        <BoxLinearGradient>
          <ScrollView>
            <View style={styles.main}>{children}</View>
          </ScrollView>
          {signButtonAdd ? <ButtonAdd onPress={onPressAdd} /> : ""}
        </BoxLinearGradient>
      </View>
    </SafeAreaView>
  );
}
