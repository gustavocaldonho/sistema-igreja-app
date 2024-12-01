import React, { useState } from "react";
import { Text, View, Alert, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./style";
import PageBase from "../PageBase";
import ItemFinanceiro from "./ItemFinanceiro";
import BoxBalance from "./BoxBalance";
import BoxFilters from "./BoxFilters";
import ModalLancamento from "./ModalLancamento";

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
    {
      id: 11,
      label: "Novembro",
      value: "nov",
      year: "2024",
    },
    {
      id: 12,
      label: "Dezembro",
      value: "dez",
      year: "2024",
    },
    {
      id: 0,
      label: "Todos",
      value: "tod",
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
            <ScrollView>
              <ItemFinanceiro positive={true} />
              <ItemFinanceiro
                positive={false}
                style={styles.backgroundColorGray}
              />
              <ItemFinanceiro positive={true} />
              <ItemFinanceiro
                positive={false}
                style={styles.backgroundColorGray}
              />
              <ItemFinanceiro positive={true} />
              <ItemFinanceiro
                positive={false}
                style={styles.backgroundColorGray}
              />
              <ItemFinanceiro positive={true} />
              <ItemFinanceiro
                positive={false}
                style={styles.backgroundColorGray}
              />
            </ScrollView>
          </View>
        </View>
        <BoxBalance style={styles.boxBalance} />
      </View>
      <ModalLancamento
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </PageBase>
  );
}
