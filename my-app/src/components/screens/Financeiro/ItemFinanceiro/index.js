import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./style";
import { formatValueFinancial } from "../functions";
import { formatDateTime } from "./functions";

export default function ItemFinanceiro({
  title,
  description,
  date,
  value,
  type,
  index,
  id,
  setModalVisible,
  setItemFinanceiroClicked,
}) {
  const styleGray = index % 2 !== 0 ? styles.backgroundColorGray : null;

  const openModalLancamento = () => {
    setItemFinanceiroClicked({
      title,
      description,
      date,
      value,
      type,
      id,
    });
    setTimeout(() => {
      setModalVisible(true);
    }, 300);
  };

  return (
    <TouchableOpacity
      style={[styles.container, styleGray]}
      activeOpacity={0.6}
      onPress={openModalLancamento}
    >
      <View style={styles.boxMain}>
        <View style={styles.boxTitle}>
          <Text
            style={[
              styles.indicatorStatus,
              type === "input" ? styles.positive : styles.negative,
            ]}
          >
            {type === "input" ? "+" : "-"}
          </Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.boxSubtitle}>
          <Text style={styles.subtitle}>{description}</Text>
        </View>
      </View>
      <View style={styles.boxRigth}>
        <View style={styles.boxDate}>
          <Text style={styles.date}>{formatDateTime(date)}</Text>
        </View>
        <View style={styles.boxValue}>
          <Text
            style={[
              styles.value,
              type === "input" ? styles.positive : styles.negative,
            ]}
          >
            {formatValueFinancial(value)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
