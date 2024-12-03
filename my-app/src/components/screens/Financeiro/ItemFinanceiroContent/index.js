import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import ItemFinanceiro from "../ItemFinanceiro";

export default function ItemFinanceiroContent({}) {
  const [releaseList, setReleaseList] = useState([
    {
      id: 0,
      title: "Exemplo",
      description: "Valor referente...",
      date: "10 out 2024",
      positive: true,
      value: 20000,
    },
    {
      id: 10,
      title: "Exemplo",
      description: "Valor referente...",
      date: "10 out 2024",
      positive: true,
      value: 20000,
    },
    {
      id: 20,
      title: "Exemplo",
      description: "Valor referente...",
      date: "10 out 2024",
      positive: false,
      value: 20000,
    },
    {
      id: 30,
      title: "Exemplo",
      description: "Valor referente...",
      date: "10 out 2024",
      positive: true,
      value: 20000,
    },
    {
      id: 30,
      title: "Exemplo",
      description: "Valor referente...",
      date: "10 out 2024",
      positive: false,
      value: 20000,
    },
    {
      id: 30,
      title: "Exemplo",
      description: "Valor referente...",
      date: "10 out 2024",
      positive: true,
      value: 20000,
    },
    {
      id: 30,
      title: "Exemplo",
      description: "Valor referente...",
      date: "10 out 2024",
      positive: true,
      value: 20000,
    },
    {
      id: 30,
      title: "Exemplo",
      description: "Valor referente...",
      date: "10 out 2024",
      positive: true,
      value: 20000,
    },
  ]);

  return (
    <View>
      {releaseList.length !== 0 ? (
        <FlatList
          data={releaseList}
          keyExtractor={(item, index) => `financial-item-${index}`}
          renderItem={({ item }) => (
            <ItemFinanceiro
              positive={item.positive}
              title={item.title}
              description={item.description}
              date={item.date}
              value={item.value}
              //   style={styles.backgroundColorGray}
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
  msgContentEmpty: {
    color: "#fff",
    alignSelf: "center",
    marginTop: 20,
  },
  footer: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundColorGray: {
    backgroundColor: "#f5f5f5",
  },
});
