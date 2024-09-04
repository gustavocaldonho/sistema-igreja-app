import React, { useEffect, useState } from "react";
import { View } from "react-native";
import ItemDizimo from "../ItemDizimo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getPaymentsDizimo } from "../../../../services/payment_api";
import { getExpiresDate } from "../functions";

export default function ItemDizimoContent({
  setModalVisible,
  setItemClicked,
  setVisibleIndicator,
}) {
  const [dizimoList, setDizimoList] = useState([]);

  async function getPaymentsDizimoForm() {
    try {
      setVisibleIndicator(true);
      const token = await AsyncStorage.getItem("AccessToken");
      const date = new Date();
      const response = await getPaymentsDizimo(date.getFullYear(), token);
      if (response.status === 200) {
        setDizimoList(response.data);
      } else {
        console.log("Não retornou a lista de meses.");
      }
      setVisibleIndicator(false);
    } catch (error) {
      console.log(`Falha na requisição. ${error}`);
    }
  }

  useEffect(() => {
    getPaymentsDizimoForm();
  }, []);

  return (
    <View>
      {dizimoList.map((d, idx) => (
        <ItemDizimo
          month={d.month}
          year={d.year}
          status={d.status}
          expiresDate={getExpiresDate(d.payment.expiresDate)}
          setModalVisible={setModalVisible}
          setItemClicked={setItemClicked}
          key={`dizimo-item-${idx}`}
        />
      ))}
    </View>
  );
}
