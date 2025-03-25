import React, { useContext, useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import BoxBalance from "../BoxBalance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoadingIndicator from "../../../auxiliary/LoadingIndicator";
import { ModalContext } from "../../../../contexts/modalContext";
import { AuthContext } from "../../../../contexts/auth";
import { getResumeBalancesYearApi } from "../../../../services/financial_api";
import { translateMonth } from "./functions";

export default function ItemBoxBalanceContent({
  modalVisible,
  setShowExtract,
  setSelectedMonth,
  setIndicatorVisible,
  setBalanceTotal,
  resumebalanceYearList,
  setResumeBalanceYearList,
}) {
  const { modalAlert } = useContext(ModalContext);
  const { user } = useContext(AuthContext);

  async function getResumeBalancesYear() {
    try {
      setIndicatorVisible(true);
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await getResumeBalancesYearApi(
        user.community,
        "2025",
        token
      );
      if (response.status === 200) {
        calculateTotalRecipe(response.data);
        setResumeBalanceYearList(Object.entries(response.data));

        // console.log("response.data", response.data);
      } else {
        throw new Error("Não foi possível carregar o resumo financeiro anual.");
      }
    } catch (error) {
      modalAlert("Ops!", error.message);
    } finally {
      setIndicatorVisible(false);
    }
  }

  function calculateTotalRecipe(data) {
    const total = Object.values(data).reduce((total, monthData) => {
      return total + monthData.recipe;
    }, 0);
    setBalanceTotal(total);
  }

  useEffect(() => {
    getResumeBalancesYear();
  }, [modalVisible]);

  return (
    <View>
      {resumebalanceYearList.length !== 0 ? (
        <FlatList
          style={styles.container}
          data={resumebalanceYearList}
          keyExtractor={([month], index) => `balance-item-${month}-${index}`}
          renderItem={({ item: [month, data], index }) => {
            return (
              <BoxBalance
                month={translateMonth(month)}
                valueMonth={month}
                previousBalance={data.last_month}
                input={data.input}
                output={data.output}
                recipe={data.recipe}
                setShowExtract={setShowExtract}
                setSelectedMonth={setSelectedMonth}
                setIndicatorVisible={setIndicatorVisible}
              />
            );
          }}
        />
      ) : (
        <LoadingIndicator />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
});
