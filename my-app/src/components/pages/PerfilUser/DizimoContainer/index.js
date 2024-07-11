import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";

const DizimoContainer = ({ months, style, styleTitleBox }) => {
  return (
    <View style={style}>
      <Text style={styleTitleBox}>DÍZIMO</Text>
      <View style={styles.boxLineListDizimo}>
        <View style={styles.itemLineList}>
          <Text style={styles.textMonth}>JAN</Text>
          <Icon name="heart" style={styles.iconStatusMonth} />
        </View>
        <View style={styles.itemLineList}>
          <Text style={styles.textMonth}>FEV</Text>
          <Icon name="heart" style={styles.iconStatusMonth} />
        </View>
        <View style={styles.itemLineList}>
          <Text style={styles.textMonth}>MAR</Text>
          <Icon name="heart" style={styles.iconStatusMonth} />
        </View>
        <View style={styles.itemLineList}>
          <Text style={styles.textMonth}>ABR</Text>
          <Icon name="remove" style={styles.iconStatusMonth} />
        </View>
      </View>
      <View style={styles.boxLineListDizimo}>
        <View style={styles.itemLineList}>
          <Text style={styles.textMonth}>MAI</Text>
          <Icon name="remove" style={styles.iconStatusMonth} />
        </View>
        <View style={[styles.itemLineList, styles.currentMonth]}>
          <Text style={styles.textMonth}>JUN</Text>
          <Icon name="exclamation" style={styles.iconStatusMonth} />
        </View>
        <View style={[styles.itemLineList, styles.blockedMonth]}>
          <Text style={styles.textMonth}>JUL</Text>
          <Icon name="minus" style={styles.iconStatusMonth} />
        </View>
        <View style={[styles.itemLineList, styles.blockedMonth]}>
          <Text style={styles.textMonth}>AGO</Text>
          <Icon name="minus" style={styles.iconStatusMonth} />
        </View>
      </View>
      <View style={styles.boxLineListDizimo}>
        <View style={[styles.itemLineList, styles.blockedMonth]}>
          <Text style={styles.textMonth}>SET</Text>
          <Icon name="minus" style={styles.iconStatusMonth} />
        </View>
        <View style={[styles.itemLineList, styles.blockedMonth]}>
          <Text style={styles.textMonth}>OUT</Text>
          <Icon name="minus" style={styles.iconStatusMonth} />
        </View>
        <View style={[styles.itemLineList, styles.blockedMonth]}>
          <Text style={styles.textMonth}>NOV</Text>
          <Icon name="minus" style={styles.iconStatusMonth} />
        </View>
        <View style={[styles.itemLineList, styles.blockedMonth]}>
          <Text style={styles.textMonth}>DEZ</Text>
          <Icon name="minus" style={styles.iconStatusMonth} />
        </View>
      </View>
    </View>
  );
};

export default DizimoContainer;
