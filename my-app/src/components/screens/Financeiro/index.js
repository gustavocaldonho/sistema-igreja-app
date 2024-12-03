import React, { useState } from "react";
import { Text, View, Alert, StatusBar } from "react-native";
import styles from "./style";
import PageBase from "../PageBase";
import BoxBalance from "./BoxBalance";
import BoxFilters from "./BoxFilters";
import ModalLancamento from "./ModalLancamento";
import ItemFinanceiroContent from "./ItemFinanceiroContent";
import ItemBoxBalanceContent from "./ItemBoxBalanceContent";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Financeiro({}) {
  const [showExtract, setShowExtract] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("dez");
  const [monthList, setMonthList] = useState([
    {
      id: 12,
      label: "DEZEMBRO",
      value: "dez",
      year: "2024",
    },
    {
      id: 11,
      label: "NOVEMBRO",
      value: "nov",
      year: "2024",
    },
    {
      id: 10,
      label: "OUTUBRO",
      value: "out",
      year: "2024",
    },
    {
      id: 9,
      label: "SETEMBRO",
      value: "set",
      year: "2024",
    },
    {
      id: 8,
      label: "AGOSTO",
      value: "ago",
      year: "2024",
    },
    {
      id: 7,
      label: "JULHO",
      value: "jul",
      year: "2024",
    },
    {
      id: 6,
      label: "JUNHO",
      value: "jun",
      year: "2024",
    },
    {
      id: 5,
      label: "MAIO",
      value: "mai",
      year: "2024",
    },
    {
      id: 4,
      label: "ABRIL",
      value: "abr",
      year: "2024",
    },
    {
      id: 3,
      label: "MARÇO",
      value: "mar",
      year: "2024",
    },
    {
      id: 2,
      label: "FEVEREIRO",
      value: "fev",
      year: "2024",
    },
    {
      id: 1,
      label: "JANEIRO",
      value: "jan",
      year: "2024",
    },
  ]);

  return (
    <>
      <PageBase
        title={"Financeiro"}
        signButtonAdd={true}
        onPressAdd={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.container}>
          {!showExtract ? (
            <ItemBoxBalanceContent
              setShowExtract={setShowExtract}
              setSelectedMonth={setSelectedMonth}
            />
          ) : (
            <View>
              <View style={styles.boxFiltersAndMain}>
                <BoxFilters
                  style={styles.boxFilters}
                  options={monthList}
                  selectedValue={selectedMonth}
                  onValueChange={(text) => {
                    setSelectedMonth(text);
                    console.log(text);
                  }}
                />
                <View style={styles.main}>
                  <ItemFinanceiroContent month={selectedMonth} />
                </View>
              </View>
              <BoxBalance
                month={""}
                previousBalance={20000}
                entry={2000}
                out={1000}
                revenue={10000}
                setShowExtract={setShowExtract}
                disableOpacity={true}
              />
            </View>
          )}
        </View>
        <ModalLancamento
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </PageBase>
      {showExtract ? (
        <TouchableOpacity
          style={styles.buttonAnnualSummary}
          activeOpacity={0.7}
          onPress={() => setShowExtract(false)}
        >
          <Text style={styles.textAnnualSummary}>Ver Resumo Anual</Text>
        </TouchableOpacity>
      ) : null}
    </>
  );
}
