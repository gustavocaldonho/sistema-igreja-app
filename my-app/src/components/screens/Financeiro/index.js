import React, { useState } from "react";
import { Text, View, Alert, StatusBar } from "react-native";
import styles from "./style";
import PageBase from "../PageBase";
import BoxBalance from "./BoxBalance";
import BoxFilters from "./BoxFilters";
import ModalLancamento from "./ModalLancamento";
import ItemFinanceiroContent from "./ItemFinanceiroContent";
import ItemBoxBalanceContent from "./ItemBoxBalanceContent";

export default function Financeiro({}) {
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedMonth, setSelectedMonth] = useState("Novembro/2024");
  const [monthList, setMonthList] = useState([
    {
      id: 10,
      label: "Outubro",
      value: "out",
      year: "2024",
    },
  ]);

  return (
    <PageBase
      title={"Financeiro"}
      signButtonAdd={true}
      onPressAdd={() => {
        setModalVisible(true);
      }}
    >
      <View style={styles.container}>
        <View style={styles.boxFiltersAndMain}>
          <BoxFilters
            style={styles.boxFilters}
            options={monthList}
            selectedValue={selectedMonth}
            onValueChange={(text) => setSelectedMonth(text)}
          />
          <View style={styles.main}>
            <ItemFinanceiroContent />
          </View>
        </View>
        <BoxBalance />
        {/* <ItemBoxBalanceContent /> */}
      </View>
      <ModalLancamento
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </PageBase>
  );
}
