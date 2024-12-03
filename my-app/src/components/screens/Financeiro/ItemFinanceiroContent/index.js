import React, { useState } from "react";
import { View, FlatList } from "react-native";
import ItemFinanceiro from "../ItemFinanceiro";

export default function ItemFinanceiroContent({ month }) {
  const [releaseList, setReleaseList] = useState([
    {
      id: 0,
      title: "Exemplo",
      description: "Valor referente...",
      date: "10 OUT 2024",
      positive: true,
      value: 20000,
    },
    {
      id: 10,
      title: "Exemplo",
      description: "Valor referente...",
      date: "10 OUT 2024",
      positive: true,
      value: 20000,
    },
    {
      id: 20,
      title: "Exemplo",
      description: "Valor referente...",
      date: "10 OUT 2024",
      positive: false,
      value: 20000,
    },
    {
      id: 30,
      title: "Exemplo",
      description: "Valor referente...",
      date: "10 OUT 2024",
      positive: true,
      value: 20000,
    },
    {
      id: 30,
      title: "Exemplo",
      description: "Valor referente...",
      date: "10 OUT 2024",
      positive: false,
      value: 20000,
    },
    {
      id: 30,
      title: "Exemplo",
      description: "Valor referente...",
      date: "10 OUT 2024",
      positive: true,
      value: 20000,
    },
    {
      id: 30,
      title: "Exemplo",
      description: "Valor referente...",
      date: "10 OUT 2024",
      positive: true,
      value: 20000,
    },
    {
      id: 30,
      title: "Exemplo",
      description: "Valor referente...",
      date: "10 OUT 2024",
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
          renderItem={({ item, index }) => (
            <ItemFinanceiro
              positive={item.positive}
              title={item.title}
              description={item.description}
              date={item.date}
              value={item.value}
              index={index}
            />
          )}
        />
      ) : (
        ""
      )}
    </View>
  );
}
