import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./style";
import { formatValueFinancial } from "../functions";

export default function BoxBalance({
  month,
  previousBalance,
  input,
  output,
  recipe,
  setShowExtract,
  disableOpacity = false,
  setSelectedMonth,
  valueMonth,
  setIndicatorVisible,
}) {
  return (
    <View style={styles.container}>
      {month ? <Text style={styles.monthTitle}>{month}</Text> : ""}
      <TouchableOpacity
        style={styles.main}
        activeOpacity={0.7}
        onPress={() => {
          setIndicatorVisible(true);
          setTimeout(() => {
            setShowExtract(true);
            setSelectedMonth(valueMonth);
            setIndicatorVisible(false);

            // console.log("month (boxBalance): ", valueMonth);
          }, 500);
        }}
        disabled={disableOpacity}
      >
        {/* <View style={styles.lineIndicator}>
          <Text style={styles.textIndicator}>Tinha</Text>
          <Text style={[styles.valueIndicator]}>
            {formatValueFinancial(previousBalance)}
          </Text>
        </View> */}
        <View style={styles.lineIndicator}>
          <Text style={styles.textIndicator}>Entrada</Text>
          <Text style={[styles.valueIndicator, styles.positive]}>
            {formatValueFinancial(input)}
          </Text>
        </View>
        <View style={styles.lineIndicator}>
          <Text style={styles.textIndicator}>Saída</Text>
          <Text style={[styles.valueIndicator, styles.negative]}>
            {formatValueFinancial(output)}
          </Text>
        </View>
        <View style={[styles.lineIndicator, styles.hr]}>
          <Text style={[styles.textIndicator, styles.textTotal]}>Receita</Text>
          <Text
            style={[
              styles.valueIndicator,
              recipe >= 0 ? styles.positive : styles.negative,
              styles.valueTotal,
            ]}
          >
            {formatValueFinancial(recipe)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
