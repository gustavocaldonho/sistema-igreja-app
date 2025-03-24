import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./style";
import { BarChart, PieChart } from "react-native-gifted-charts";
import Legend from "./Legend";

const COLORS = [
  "#FF9800",
  "#2196F3",
  "#F44336",
  "#9C27B0",
  "#E91E63",
  "#673AB7",
  "#00BCD4",
  "#FF5722",
  "#795548",
  "#607D8B",
  "#3F51B5",
  "#9E9E9E",
  "#CDDC39",
  "#8BC34A",
  "#FFC107",
  "#FFEB3B",
  "#00FF00",
  "#9C27B0",
  "#3F51B5",
  "#FF4081",
  "#388E3C",
  "#8E24AA",
  "#1976D2",
  "#F57C00",
  "#4CAF50",
];

export default function ModalCharts({
  visible,
  onClose,
  balanceList,
  month,
  showExtract,
}) {
  const [dataChartOut, setDataChartOut] = useState([]);
  const [dataChartEntry, setDataChartEntry] = useState([]);
  const [totalData, setTotalData] = useState([]);

  const getChartEntryAndOut = (balanceList) => {
    const totalEntry = balanceList
      .filter((item) => item.type === "input")
      .reduce((sum, item) => sum + item.value, 0);
    const totalOut = balanceList
      .filter((item) => item.type === "output")
      .reduce((sum, item) => sum + item.value, 0);

    return [totalEntry, totalOut];
  };

  const getChartEntry = (balanceList, totalEntry) => {
    const entryData = balanceList
      .filter((item) => item.type === "input")
      .map((item, index) => ({
        value: Number(item.value),
        text: `${((item.value / totalEntry) * 100).toFixed(0)}%`,
        caption: item.title.trim(),
        color: getColor(index),
      }))
      .sort((a, b) => b.value - a.value);
    return entryData;
  };

  const getChartOut = (balanceList, totalOut) => {
    const outData = balanceList
      .filter((item) => item.type === "output")
      .map((item, index) => ({
        value: Number(item.value),
        text: `${((item.value / totalOut) * 100).toFixed(0)}%`,
        caption: item.title.trim(),
        color: getColor(index),
      }))
      .sort((a, b) => b.value - a.value);
    return outData;
  };

  // Função para obter cores de forma cíclica
  const getColor = (index) => COLORS[index % COLORS.length];

  useEffect(() => {
    if (balanceList && balanceList.length > 0) {
      // Filtra entradas e saídas separadamente
      const totalEntry = getChartEntryAndOut(balanceList)[0];
      const totalOut = getChartEntryAndOut(balanceList)[1];

      // Geração dos dados do gráfico de entradas
      const entryData = getChartEntry(balanceList, getColor, totalEntry);

      // Geração dos dados do gráfico de saídas
      const outData = getChartOut(balanceList, getColor, totalOut);

      setDataChartEntry(entryData);
      setDataChartOut(outData);
      setTotalData([
        {
          value: totalEntry,
          label: "Entradas",
          frontColor: "#56B35B",
        },
        {
          value: totalOut,
          label: "Saídas",
          frontColor: "#D93030",
        },
      ]);
    }
  }, [balanceList]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      presentationStyle="fullScreen"
    >
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#339dd7"
      />
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Icon name="times" style={styles.closeButton} />
          </TouchableOpacity>
          <Text style={styles.title}>Gráficos</Text>
        </View>

        <ScrollView style={styles.content}>
          <View style={styles.boxTitleMonth}>
            <Text style={styles.titleMonth}>{month}</Text>
          </View>
          {balanceList.length !== 0 ? (
            <View>
              {/* Gráfico de Controle de Caixa */}
              <View style={styles.boxChart}>
                <Text style={styles.titleChart}>Controle de Caixa</Text>
                <BarChart
                  data={totalData}
                  showText={true}
                  textColor="#fff"
                  barWidth={60}
                  showYAxisIndices
                  showFractionalValue
                  noOfSections={6}
                  initialSpacing={60}
                  spacing={40}
                  barBorderRadius={10}
                  yAxisThickness={0}
                  xAxisThickness={0}
                  isAnimated
                  autoCenterTooltip={true}
                />
              </View>

              {/* Gráfico de Entradas */}
              <View style={styles.boxChart}>
                <Text style={styles.titleChart}>Entradas</Text>
                <PieChart
                  data={dataChartEntry}
                  showTooltip={true}
                  textColor="#fff"
                  donut
                />
                <Legend data={dataChartEntry} />
              </View>

              {/* Gráfico de Saídas */}
              <View style={styles.boxChart}>
                <Text style={styles.titleChart}>Despesas</Text>
                <PieChart
                  data={dataChartOut}
                  showTooltip={true}
                  textColor="#fff"
                  donut
                />
                <Legend data={dataChartOut} />
              </View>
            </View>
          ) : (
            <Text style={styles.textNotDatas}>Sem dados para exibir</Text>
          )}
        </ScrollView>
      </View>
    </Modal>
  );
}
