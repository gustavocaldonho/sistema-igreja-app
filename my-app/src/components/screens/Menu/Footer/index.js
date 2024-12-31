import React from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.footerTitle}>Defagus Systems</Text>
      <View style={styles.footerSubTitle}>
        <Icon name="copyright" color={"#fff"} style={styles.iconCopyright} />
        <Text style={styles.subTitle}>Todos os Direitos Reservados</Text>
      </View>
    </View>
  );
}
