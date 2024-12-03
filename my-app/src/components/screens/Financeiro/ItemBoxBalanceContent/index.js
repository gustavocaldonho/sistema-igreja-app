import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import BoxBalance from "../BoxBalance";

export default function ItemBoxBalanceContent({}) {
  const [balanceList, setbalanceList] = useState([
    {
      month: "AGOSTO",
    },
    {
      month: "SETEMBRO",
    },
    {
      month: "OUTUBRO",
    },
    {
      month: "NOVEMBRO",
    },
    {
      month: "DEZEMBRO",
    },
  ]);

  return (
    <View>
      {balanceList.length !== 0 ? (
        <FlatList
          data={balanceList}
          keyExtractor={(item, index) => `balance-item-${index}`}
          renderItem={({ item }) => <BoxBalance month={item.month} />}
        />
      ) : (
        ""
      )}
    </View>
  );
}
