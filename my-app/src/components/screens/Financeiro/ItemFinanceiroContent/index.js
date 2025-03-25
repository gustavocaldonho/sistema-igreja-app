import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import ItemFinanceiro from "../ItemFinanceiro";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getBalancesMonthApi } from "../../../../services/financial_api";
import { AuthContext } from "../../../../contexts/auth";
import { ModalContext } from "../../../../contexts/modalContext";
import styles from "./style";

export default function ItemFinanceiroContent({
  selectedOption,
  modalVisible,
  setModalVisible,
  setItemFinanceiroClicked,
  balanceMonthList,
  setBalanceMonthList,
}) {
  const { modalAlert } = useContext(ModalContext);
  const { user } = useContext(AuthContext);
  const [visibleMsgListEmpty, setVisibleMsgListEmpty] = useState(false);

  async function getBalancesList() {
    try {
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await getBalancesMonthApi(
        user.community,
        selectedOption.year,
        selectedOption.month,
        token
      );
      if (response.status === 200) {
        const finances = response.data.finances || [];
        setBalanceMonthList(finances);
        setVisibleMsgListEmpty(finances.length === 0);
      } else {
        throw new Error("Não foi possível carregar o extrato mensal.");
      }
    } catch (error) {
      modalAlert("Ops!", error.message);
    }
  }

  useEffect(() => {
    getBalancesList();
  }, [selectedOption, modalVisible]);

  return (
    <View>
      {balanceMonthList.length !== 0 ? (
        <FlatList
          data={balanceMonthList}
          keyExtractor={(item, index) => `financial-item-${index}`}
          renderItem={({ item, index }) => (
            <ItemFinanceiro
              type={item.type}
              title={item.title}
              description={item.description}
              date={item.date}
              value={item.value}
              index={index}
              id={item.id}
              setModalVisible={setModalVisible}
              setItemFinanceiroClicked={setItemFinanceiroClicked}
            />
          )}
        />
      ) : (
        visibleMsgListEmpty && (
          <Text style={styles.info}>Ainda não foi inserido nenhum saldo</Text>
        )
      )}
    </View>
  );
}
