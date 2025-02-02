import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import { getPaymentsDizimo } from "../../../../services/payment_api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  translateMonth,
  getStatusIcon,
  sortMonths,
} from "../../Dizimo/functions";
import LoadingIndicator from "../../../auxiliary/LoadingIndicator";

const DizimoContainer = ({ style, styleTitleBox }) => {
  const [dizimoList, setDizimoList] = useState([]);
  const [visibleIndicator, setVisibleIndicator] = useState(false);

  async function getPaymentsDizimoForm() {
    try {
      setVisibleIndicator(true);
      const token = await AsyncStorage.getItem("AccessToken");
      const date = new Date();
      const response = await getPaymentsDizimo(date.getFullYear(), token);
      if (response.status === 200) {
        setDizimoList(sortMonths(response.data));
      } else {
        console.log("Não retornou a lista de meses.");
      }
      setVisibleIndicator(false);
    } catch (error) {
      console.log(`Falha na requisição. ${error}`);
    }
  }

  const ItemDizimoProfileUser = ({ month, status }) => {
    const date = new Date();
    const currentMonth = date
      .toLocaleString("en-US", { month: "long" })
      .toLocaleLowerCase();
    return (
      <View
        style={[
          styles.itemMonth,
          currentMonth === month ? styles.currentMonth : "",
        ]}
      >
        <Text style={styles.textMonth}>{translateMonth(month)[1]}</Text>
        <Icon name={getStatusIcon(status)} style={styles.iconStatusMonth} />
      </View>
    );
  };

  useEffect(() => {
    getPaymentsDizimoForm();
  }, []);

  return (
    <View style={[style, styles.container]}>
      <Text style={styleTitleBox}>DÍZIMO</Text>
      {visibleIndicator ? <LoadingIndicator color="#339dd7" /> : ""}
      <View style={styles.innerContainer}>
        {dizimoList.map((d, idx) => (
          <ItemDizimoProfileUser month={d.month} status={d.status} key={idx} />
        ))}
      </View>
    </View>
  );
};

export default DizimoContainer;
