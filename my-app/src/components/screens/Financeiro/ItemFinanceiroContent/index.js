import React, { useContext, useState } from "react";
import { View, Text, FlatList } from "react-native";
import ItemFinanceiro from "../ItemFinanceiro";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getBalancesMonthApi } from "../../../../services/financial_api";
import { AuthContext } from "../../../../contexts/auth";
import { ModalContext } from "../../../../contexts/modalContext";
import styles from "./style";

export default function ItemFinanceiroContent({ month, year }) {
  const { modalAlert } = useContext(ModalContext);
  const { user } = useContext(AuthContext);
  const [balanceList, setBalanceList] = useState([
    // {
    //   id: 0,
    //   title: "Exemplo",
    //   description: "Valor referente...",
    //   date: "10 OUT 2024",
    //   positive: true,
    //   value: 20000,
    // },

    {
      id: "00e39343-326e-452f-a328-447676bd9483",
      title: "Dvdv",
      description: "Dbdv",
      date: "2024-12-17T11:54:19.374000+00:00",
      type: "output",
      value: 59.59,
    },
  ]);

  async function getBalancesList(params) {
    try {
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await getBalancesMonthApi(
        user.community,
        year,
        month,
        token
      );
      if (response.status === 200) {
        // setBalanceList(response.data);
        console.log("success");
      } else {
        throw new Error("Não foi possível carregar o extrato mensal.");
      }
    } catch (error) {
      modalAlert("Ops!", error.message);
    } finally {
    }
  }

  return (
    <View>
      {balanceList.length !== 0 ? (
        <FlatList
          data={balanceList}
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
        <Text style={styles.info}>Ainda não foi inserido nenhum saldo</Text>
      )}
    </View>
  );
}
