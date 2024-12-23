import React, { useContext, useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import BoxBalance from "../BoxBalance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ModalContext } from "../../../../contexts/modalContext";
import { AuthContext } from "../../../../contexts/auth";
import { getResumeBalancesYearApi } from "../../../../services/financial_api";
import { translateMonth } from "./functions";

export default function ItemBoxBalanceContent({
  modalVisible,
  setShowExtract,
  setSelectedMonth,
  setIndicatorVisible,
}) {
  const { modalAlert } = useContext(ModalContext);
  const { user } = useContext(AuthContext);

  const [resumebalanceList, setResumeBalanceList] = useState([]);

  async function getResumeBalancesYear() {
    try {
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await getResumeBalancesYearApi(
        user.community,
        "2024",
        token
      );
      if (response.status === 200) {
        setResumeBalanceList(Object.entries(response.data).reverse());
      } else {
        throw new Error("Não foi possível carregar o resumo financeiro anual.");
      }
    } catch (error) {
      modalAlert("Ops!", error.message);
    }
  }

  useEffect(() => {
    getResumeBalancesYear();
  }, [modalVisible]);

  return (
    <View>
      {resumebalanceList.length !== 0 ? (
        <FlatList
          style={styles.container}
          data={resumebalanceList}
          keyExtractor={([month], index) => `balance-item-${month}-${index}`}
          renderItem={({ item: [month, data], index }) => {
            // const previousRecipe =
            //   index > 0 ? resumebalanceList[index - 1][1].recipe : 0;
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
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
});
