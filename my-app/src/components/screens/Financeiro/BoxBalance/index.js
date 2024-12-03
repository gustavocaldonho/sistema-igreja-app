import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styles from "./style";

export default function BoxBalance({ month }) {
  return (
    <View style={styles.container}>
      {month ? <Text style={styles.monthTitle}>{month}</Text> : ""}
      <TouchableOpacity style={styles.main} activeOpacity={0.7}>
        <View style={styles.lineIndicator}>
          <Text style={styles.textIndicator}>Tinha</Text>
          <Text style={[styles.valueIndicator]}>R$ 10.000,00</Text>
        </View>
        <View style={styles.lineIndicator}>
          <Text style={styles.textIndicator}>Entrada</Text>
          <Text style={[styles.valueIndicator, styles.positive]}>
            R$ 2.745,00
          </Text>
        </View>
        <View style={styles.lineIndicator}>
          <Text style={styles.textIndicator}>Saída</Text>
          <Text style={[styles.valueIndicator, styles.negative]}>
            R$ 745,00
          </Text>
        </View>
        <View style={[styles.lineIndicator, styles.hr]}>
          <Text style={[styles.textIndicator, styles.textTotal]}>Receita</Text>
          <Text
            style={[styles.valueIndicator, styles.positive, styles.valueTotal]}
          >
            R$ 12.000,00
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
