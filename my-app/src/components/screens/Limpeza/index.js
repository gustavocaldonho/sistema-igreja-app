import React, { useState } from "react";
import { View, Text } from "react-native";
import PageBase from "../PageBase";
import BoxFilters from "./BoxFilters";
import styles from "./style";
import ItemCleaningContent from "./ItemCleaningContent.js";
import LoadingIndicator from "../../auxiliary/LoadingIndicator";
import { getCurrentMonthAndYear } from "./functions.js";
import InputUnitValue from "./InputUnitValue/index.js";

export default function Limpeza({ navigation }) {
  const [selectedOption, setSelectedOption] = useState(
    getCurrentMonthAndYear()
  );
  const [monthList] = useState([
    { id: 12, label: "DEZEMBRO", value: "december", year: "2025" },
    { id: 11, label: "NOVEMBRO", value: "november", year: "2025" },
    { id: 10, label: "OUTUBRO", value: "october", year: "2025" },
    { id: 9, label: "SETEMBRO", value: "september", year: "2025" },
    { id: 8, label: "AGOSTO", value: "august", year: "2025" },
    { id: 7, label: "JULHO", value: "july", year: "2025" },
    { id: 6, label: "JUNHO", value: "june", year: "2025" },
    { id: 5, label: "MAIO", value: "may", year: "2025" },
    { id: 4, label: "ABRIL", value: "april", year: "2025" },
  ]);
  const [visibleIndicatorMain, setVisibleIndicatorMain] = useState(false);
  const [totalItemsChecked, setTotalItemsChecked] = useState({
    totalItems: 0,
    payedItems: 0,
  });
  const [unitValue, setUnitValue] = useState("20,00");

  const updateItemsChecked = (value) => {
    setTotalItemsChecked((prevState) => ({
      ...prevState,
      payedItems: prevState.payedItems + value,
    }));
  };

  return (
    <PageBase title={"Limpeza"}>
      <View style={styles.content}>
        <BoxFilters
          options={monthList}
          selectedValue={selectedOption}
          onValueChange={(value) => setSelectedOption(value)}
        />

        <View style={styles.boxUnitValue}>
          <Text style={styles.textUnitValue}>Valor Unitário</Text>
          <InputUnitValue
            placeholder={unitValue}
            value={unitValue}
            onChangeText={setUnitValue}
          />
        </View>

        <View style={styles.main}>
          {visibleIndicatorMain && <LoadingIndicator color="#339dd7" />}
          <ItemCleaningContent
            selectedOption={selectedOption}
            setVisibleIndicatorMain={setVisibleIndicatorMain}
            setTotalItemsChecked={setTotalItemsChecked}
            updateItemsChecked={updateItemsChecked}
          />
        </View>

        <View style={styles.footer}>
          <View style={styles.boxValueTotal}>
            <Text style={styles.textValueTotal}>Total: </Text>
            <Text style={styles.textValueTotal}>
              0
              {/* R$ {formatMoney(totalItemsChecked.payedItems * (parseFloat(unitValue.replace(/\./g, "").replace(",", ".")) || 0))} */}
            </Text>
          </View>
          <View style={styles.boxValueTotal}>
            <Text style={styles.textValueTotal}>Pagos: </Text>
            <Text style={styles.textValueTotal}>
              {totalItemsChecked.payedItems}/{totalItemsChecked.totalItems}
            </Text>
          </View>
        </View>
      </View>
    </PageBase>
  );
}
