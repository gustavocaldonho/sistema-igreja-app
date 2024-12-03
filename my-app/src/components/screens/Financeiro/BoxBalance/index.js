import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./style";
import { formatValueFinancial } from "../functions";

export default function BoxBalance({
  month,
  previousBalance,
  entry,
  out,
  setShowExtract,
  disableOpacity = false,
  setSelectedMonth,
  valueMonth,
}) {
  return (
    <View style={styles.container}>
      {month ? <Text style={styles.monthTitle}>{month}</Text> : ""}
      <TouchableOpacity
        style={styles.main}
        activeOpacity={0.7}
        onPress={() => {
          setShowExtract(true);
          setSelectedMonth(valueMonth);
        }}
        disabled={disableOpacity}
      >
        <View style={styles.lineIndicator}>
          <Text style={styles.textIndicator}>Tinha</Text>
          <Text style={[styles.valueIndicator]}>
            {formatValueFinancial(previousBalance)}
          </Text>
        </View>
        <View style={styles.lineIndicator}>
          <Text style={styles.textIndicator}>Entrada</Text>
          <Text style={[styles.valueIndicator, styles.positive]}>
            {formatValueFinancial(entry)}
          </Text>
        </View>
        <View style={styles.lineIndicator}>
          <Text style={styles.textIndicator}>Saída</Text>
          <Text style={[styles.valueIndicator, styles.negative]}>
            {formatValueFinancial(out)}
          </Text>
        </View>
        <View style={[styles.lineIndicator, styles.hr]}>
          <Text style={[styles.textIndicator, styles.textTotal]}>Receita</Text>
          <Text
            style={[styles.valueIndicator, styles.positive, styles.valueTotal]}
          >
            {formatValueFinancial(previousBalance + entry - out)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
