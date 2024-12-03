import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./style";
import { formatValueFinancial } from "../functions";

export default function ItemFinanceiro({
  title,
  description,
  date,
  value,
  positive,
  index,
}) {
  const styleGray = index % 2 !== 0 ? styles.backgroundColorGray : null;

  return (
    <TouchableOpacity style={[styles.container, styleGray]} activeOpacity={0.6}>
      <View style={styles.boxMain}>
        <View style={styles.boxTitle}>
          <Text
            style={[
              styles.indicatorStatus,
              positive ? styles.positive : styles.negative,
            ]}
          >
            {positive ? "+" : "-"}
          </Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.boxSubtitle}>
          <Text style={styles.subtitle}>{description}</Text>
        </View>
      </View>
      <View style={styles.boxRigth}>
        <View style={styles.boxDate}>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.boxValue}>
          <Text
            style={[styles.value, positive ? styles.positive : styles.negative]}
          >
            {formatValueFinancial(value)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
