import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ItemDizimo from "../ItemDizimo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getPaymentsDizimo } from "../../../../services/payment_api";
import { sortMonths } from "../functions";
import { FlatList } from "react-native-gesture-handler";

export default function ItemDizimoContent({
  cpf,
  setModalVisible,
  setItemClicked,
  setVisibleIndicator,
  setTotalDizimo,
  visibleIndicator,
}) {
  const [dizimoList, setDizimoList] = useState([]);

  async function getPaymentsDizimoForm() {
    try {
      setVisibleIndicator(true);
      const token = await AsyncStorage.getItem("AccessToken");
      const date = new Date();
      const response = await getPaymentsDizimo(cpf, date.getFullYear(), token);
      if (response.status === 200) {
        setDizimoList(sortMonths(response.data, 0));
      } else {
        console.log("Não retornou a lista de meses.");
      }
      setVisibleIndicator(false);
    } catch (error) {
      console.log(`Falha na requisição. ${error}`);
    }
  }

  function getTotalDizimo() {
    let total = 0;
    dizimoList.forEach((d) => {
      if (d.payment && d.status === "paid") {
        total += d.payment.value;
      }
    });
    return total;
  }

  useEffect(() => {
    getPaymentsDizimoForm();
  }, []);

  useEffect(() => {
    setTotalDizimo(getTotalDizimo());
  }, [dizimoList]);

  return (
    <View>
      {dizimoList.length !== 0 ? (
        <FlatList
          contentContainerStyle={styles.flatilistContainer}
          showsVerticalScrollIndicator={false}
          data={dizimoList}
          keyExtractor={(item, idx) => `dizimo-item-${idx}`}
          renderItem={({ item }) => (
            <ItemDizimo
              month={item.month}
              year={item.year}
              status={item.status}
              paidIn={item.payment ? item.payment.createdAt : null}
              valuePaid={item.payment ? item.payment.value : null}
              setModalVisible={setModalVisible}
              setItemClicked={setItemClicked}
            />
          )}
        />
      ) : !visibleIndicator ? (
        <Text style={styles.msgContentEmpty}>
          Não foi possível listar os meses do Dízimo.
        </Text>
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
  flatilistContainer: {
    paddingBottom: 100,
  },
});
