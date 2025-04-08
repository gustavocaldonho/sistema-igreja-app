import React, { useState } from "react";
import { ScrollView } from "react-native";
import PageBase from "../PageBase";
import ItemCleaning from "./ItemCleaning";
import BoxFilters from "./BoxFilters";
import styles from "./style";
// import ItemUserContent from "./ItemUserContent";
// import LoadingIndicator from "../../auxiliary/LoadingIndicator";

export default function Limpeza({ navigation }) {
  //   const [visibleIndicator, setVisibleIndicator] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    month: "january",
    year: "2025",
  });
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
    { id: 3, label: "MARÇO", value: "march", year: "2025" },
    { id: 2, label: "FEVEREIRO", value: "february", year: "2025" },
    { id: 1, label: "JANEIRO", value: "january", year: "2025" },
  ]);

  return (
    <PageBase title={"Limpeza"}>
      {/* {visibleIndicator ? <LoadingIndicator /> : ""}
      <ItemUserContent
        navigation={navigation}
        setVisibleIndicator={setVisibleIndicator}
      /> */}

      <BoxFilters
        options={monthList}
        selectedValue={selectedOption}
        onValueChange={(value) => setSelectedOption(value)}
      />

      <ScrollView style={styles.main}>
        <ItemCleaning />
        <ItemCleaning />
        <ItemCleaning />
        <ItemCleaning />
        <ItemCleaning />
        <ItemCleaning />
        <ItemCleaning />
        <ItemCleaning />
        <ItemCleaning />
        <ItemCleaning />
        <ItemCleaning />
        <ItemCleaning />
        <ItemCleaning />
        <ItemCleaning />
        <ItemCleaning />
      </ScrollView>
    </PageBase>
  );
}
