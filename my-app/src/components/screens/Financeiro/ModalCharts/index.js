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
  balanceMonthList,
  month,
  year,
  showExtract,
  resumeBalanceYearList,
}) {
  const [dataChartOut, setDataChartOut] = useState([]);
  const [dataChartEntry, setDataChartEntry] = useState([]);
  const [totalData, setTotalData] = useState([]);
  const [resumeYearData, setResumeYearData] = useState([]);
  const [maxValueOnResumeYearData, setMaxValueOnResumeYearData] = useState(0);

  // Gráfico de Controle de Caixa (barras)
  const getChartEntryAndOut = (balanceMonthList) => {
    const entryList = balanceMonthList.filter((item) => item.type === "input");
    const outList = balanceMonthList.filter((item) => item.type === "output");

    const totalEntry = entryList.length
      ? entryList.reduce((sum, item) => sum + item.value, 0)
      : 0;

    const totalOut = outList.length
      ? outList.reduce((sum, item) => sum + item.value, 0)
      : 0;

    return [totalEntry, totalOut];
  };

  // Gráfico de Entradas (Pizza)
  const setChartEntry = (balanceMonthList, totalEntry) => {
    const entryList = balanceMonthList.filter((item) => item.type === "input");

    if (entryList.length === 0) setDataChartEntry([]);

    const entryData = entryList
      .map((item, index) => ({
        value: Number(item.value),
        text: `${((item.value / totalEntry) * 100).toFixed(0)}%`,
        caption: item.title.trim(),
        color: getColor(index),
      }))
      .sort((a, b) => b.value - a.value);

    setDataChartEntry(entryData);
  };

  // Gráfico de Saídas (Pizza)
  const setChartOut = (balanceMonthList, totalOut) => {
    const outList = balanceMonthList.filter((item) => item.type === "output");

    if (outList.length === 0) setDataChartOut([]);

    const outData = outList
      .map((item, index) => ({
        value: Number(item.value),
        text: `${((item.value / totalOut) * 100).toFixed(0)}%`,
        caption: item.title.trim(),
        color: getColor(index),
      }))
      .sort((a, b) => b.value - a.value);

    setDataChartOut(outData);
  };

  const getChartResumeYear = (resumeBalanceYearList) => {
    const monthLabels = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];

    const resumeYearData = resumeBalanceYearList.flatMap(
      ([month, data], index) => [
        {
          value: data.input,
          frontColor: "#56B35B",
          spacing: 1,
          label: monthLabels[index],
        },
        {
          value: data.output,
          frontColor: "#D93030",
        },
      ]
    );
    setMaxValueOnResumeYearData(getMaxValueOnResumeYearData(resumeYearData));
    return resumeYearData;
  };

  const getMaxValueOnResumeYearData = (resumeYearData) => {
    let maxValue = 0;
    resumeYearData.forEach((item) => {
      if (item.value > maxValue) {
        maxValue = item.value;
      }
    });
    return maxValue;
  };

  // Função para obter cores de forma cíclica
  const getColor = (index) => COLORS[index % COLORS.length];

  useEffect(() => {
    if (!showExtract) {
      const resumeYearData = getChartResumeYear(resumeBalanceYearList);
      setResumeYearData(resumeYearData);
    } else {
      if (balanceMonthList && balanceMonthList.length > 0) {
        // Filtra o valor total de entradas e o valor total de saídas separadamente (controle de caixa - gráfico de barras)
        const totalEntry = getChartEntryAndOut(balanceMonthList)[0];
        const totalOut = getChartEntryAndOut(balanceMonthList)[1];
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

        // Geração dos dados do gráfico de entradas
        setChartEntry(balanceMonthList, totalEntry);

        // Geração dos dados do gráfico de saídas
        setChartOut(balanceMonthList, totalOut);
      }
    }
  }, [visible]);

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
          {showExtract ? (
            <View>
              <View style={styles.boxTitleMonth}>
                <Text style={styles.titleMonth}>{month}</Text>
              </View>
              {balanceMonthList.length !== 0 ? (
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
                  {dataChartEntry.length > 0 ? (
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
                  ) : null}

                  {/* Gráfico de Saídas */}
                  {dataChartOut.length > 0 ? (
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
                  ) : null}
                </View>
              ) : (
                <Text style={styles.textNotDatas}>Sem dados para exibir</Text>
              )}
            </View>
          ) : (
            <View>
              <View style={styles.boxTitleMonth}>
                <Text style={styles.titleMonth}>{year}</Text>
              </View>

              {/* Gráfico Resumo Anual */}
              <BarChart
                data={resumeYearData}
                barWidth={16}
                initialSpacing={10}
                spacing={14}
                barBorderRadius={4}
                yAxisThickness={0}
                xAxisType={"dashed"}
                xAxisColor={"lightgray"}
                yAxisTextStyle={{ color: "lightgray" }}
                stepValue={maxValueOnResumeYearData / 5}
                maxValue={maxValueOnResumeYearData}
                noOfSections={10}
                labelWidth={40}
                xAxisLabelTextStyle={{
                  textAlign: "center",
                }}
                horizontal
                isAnimated
              />
            </View>
          )}
        </ScrollView>
      </View>
    </Modal>
  );
}
