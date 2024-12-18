import React, { useState } from "react";
import { Text, View } from "react-native";
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
  const [selectedOption, setSelectedOption] = useState({
    month: "december",
    year: "2024",
  });
  const [itemFinanceiroClicked, setItemFinanceiroClicked] = useState({});

  const [monthList] = useState([
    { id: 12, label: "DEZEMBRO", value: "december", year: "2024" },
    { id: 11, label: "NOVEMBRO", value: "november", year: "2024" },
    { id: 10, label: "OUTUBRO", value: "october", year: "2024" },
    { id: 9, label: "SETEMBRO", value: "september", year: "2024" },
    { id: 8, label: "AGOSTO", value: "august", year: "2024" },
    { id: 7, label: "JULHO", value: "july", year: "2024" },
    { id: 6, label: "JUNHO", value: "june", year: "2024" },
    { id: 5, label: "MAIO", value: "may", year: "2024" },
    { id: 4, label: "ABRIL", value: "april", year: "2024" },
    { id: 3, label: "MARÇO", value: "march", year: "2024" },
    { id: 2, label: "FEVEREIRO", value: "february", year: "2024" },
    { id: 1, label: "JANEIRO", value: "january", year: "2024" },
  ]);

  return (
    <>
      <PageBase
        title="Financeiro"
        signButtonAdd={true}
        onPressAdd={() => {
          setModalVisible(true);
          setItemFinanceiroClicked({});
        }}
      >
        <View style={styles.container}>
          {!showExtract ? (
            <ItemBoxBalanceContent
              setShowExtract={setShowExtract}
              setSelectedMonth={(month) =>
                setSelectedOption((prev) => ({ ...prev, month }))
              }
            />
          ) : (
            <View>
              <View style={styles.boxFiltersAndMain}>
                <BoxFilters
                  style={styles.boxFilters}
                  options={monthList}
                  selectedValue={selectedOption}
                  onValueChange={(value) => {
                    setSelectedOption(value);
                  }}
                />
                <View style={styles.main}>
                  <ItemFinanceiroContent
                    selectedOption={selectedOption}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    setItemFinanceiroClicked={setItemFinanceiroClicked}
                  />
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
          itemClicked={itemFinanceiroClicked}
        />
      </PageBase>
      {showExtract && (
        <TouchableOpacity
          style={styles.buttonAnnualSummary}
          activeOpacity={0.7}
          onPress={() => setShowExtract(false)}
        >
          <Text style={styles.textAnnualSummary}>Ver Resumo Anual</Text>
        </TouchableOpacity>
      )}
    </>
  );
}
