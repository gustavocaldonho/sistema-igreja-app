import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";

const MortuaryContainer = ({ years, style, styleTitleBox }) => {
  return (
    <View style={style}>
      <Text style={styleTitleBox}>CAIXA MORTUÁRIA</Text>
      <View style={styles.boxLineListMortuary}>
        <View style={styles.itemLineList}>
          <Text style={styles.textYear}>2023</Text>
          <Icon name="heart" style={styles.iconStatusYear} />
        </View>
        <View style={[styles.itemLineList, styles.currentYear]}>
          <Text style={styles.textYear}>2024</Text>
          <Icon name="heart" style={styles.iconStatusYear} />
        </View>
      </View>
    </View>
  );
};

export default MortuaryContainer;
