import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import BoxBalance from "../BoxBalance";

export default function ItemBoxBalanceContent({
  setShowExtract,
  setSelectedMonth,
}) {
  const [balanceList, setBalanceList] = useState([
    {
      month: "DEZEMBRO",
      value: "december",
      previousBalance: 43000,
      entry: 35000,
      out: 12000,
    },
    {
      month: "NOVEMBRO",
      value: "november",
      previousBalance: 40000,
      entry: 32000,
      out: 11000,
    },
    {
      month: "OUTUBRO",
      value: "october",
      previousBalance: 37000,
      entry: 28000,
      out: 10000,
    },
    {
      month: "SETEMBRO",
      value: "september",
      previousBalance: 34000,
      entry: 30000,
      out: 9000,
    },
    {
      month: "AGOSTO",
      value: "august",
      previousBalance: 31000,
      entry: 26000,
      out: 7000,
    },
    {
      month: "JULHO",
      value: "july",
      previousBalance: 27000,
      entry: 25000,
      out: 8000,
    },
    {
      month: "JUNHO",
      value: "june",
      previousBalance: 24500,
      entry: 21000,
      out: 6000,
    },
    {
      month: "MAIO",
      value: "may",
      previousBalance: 20500,
      entry: 24000,
      out: 7000,
    },
    {
      month: "ABRIL",
      value: "april",
      previousBalance: 17500,
      entry: 22000,
      out: 4000,
    },
    {
      month: "MARÇO",
      value: "march",
      previousBalance: 14500,
      entry: 18000,
      out: 5000,
    },
    {
      month: "FEVEREIRO",
      value: "february",
      previousBalance: 12000,
      entry: 15000,
      out: 2500,
    },
    {
      month: "JANEIRO",
      value: "january",
      previousBalance: 10000,
      entry: 20000,
      out: 3000,
    },
  ]);

  return (
    <View>
      {balanceList.length !== 0 ? (
        <FlatList
          style={styles.container}
          data={balanceList}
          keyExtractor={(item, index) => `balance-item-${index}`}
          renderItem={({ item }) => (
            <BoxBalance
              month={item.month}
              valueMonth={item.value}
              previousBalance={item.previousBalance}
              entry={item.entry}
              out={item.out}
              revenue={item.revenue}
              setShowExtract={setShowExtract}
              setSelectedMonth={setSelectedMonth}
            />
          )}
        />
      ) : (
        ""
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
});
