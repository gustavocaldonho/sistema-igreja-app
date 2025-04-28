import React, { useEffect, useState } from "react";
import { View } from "react-native";
import ItemDizimo from "../ItemDizimo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getPaymentsDizimo } from "../../../../services/payment_api";
import { sortMonths } from "../functions";

export default function ItemDizimoContent({
  cpf,
  setModalVisible,
  setItemClicked,
  setVisibleIndicator,
  setTotalDizimo,
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
      // console.log("Lista de meses: ", response.data);
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
      {dizimoList.map((d, idx) => (
        <ItemDizimo
          month={d.month}
          year={d.year}
          status={d.status}
          paidIn={d.payment ? d.payment.createdAt : null}
          valuePaid={d.payment ? d.payment.value : null}
          setModalVisible={setModalVisible}
          setItemClicked={setItemClicked}
          key={`dizimo-item-${idx}`}
        />
      ))}
    </View>
  );
}
