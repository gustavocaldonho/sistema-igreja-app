import React, { useContext, useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./style";
import PageBase from "../PageBase";
import BoxBalance from "./BoxBalance";
import BoxFilters from "./BoxFilters";
import ModalLancamento from "./ModalLancamento";
import ItemFinanceiroContent from "./ItemFinanceiroContent";
import ItemBoxBalanceContent from "./ItemBoxBalanceContent";
import { ModalContext } from "../../../contexts/modalContext";
import { getResumeBalanceMonthApi } from "../../../services/financial_api";
import { AuthContext } from "../../../contexts/auth";
import LoadingIndicator from "../../auxiliary/LoadingIndicator";
import { formatValueFinancial } from "./functions";

export default function Financeiro({}) {
  const { user } = useContext(AuthContext);
  const { modalAlert } = useContext(ModalContext);
  const [showExtract, setShowExtract] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [indicatorVisible, setIndicatorVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    month: "december",
    year: "2024",
  });
  const [itemFinanceiroClicked, setItemFinanceiroClicked] = useState({});
  const [itemBoxBalanceSelected, setItemBoxBalanceSelected] = useState({});
  const [monthList] = useState([
    { id: 12, label: "DEZEMBRO", value: "december", year: "2024" },
    { id: 11, label: "NOVEMBRO", value: "november", year: "2024" },
    { id: 10, label: "OUTUBRO", value: "october", year: "2024" },
    { id: 9, label: "SETEMBRO", value: "september", year: "2024" },
    { id: 8, label: "AGOSTO", value: "august", year: "2024" },
    { id: 7, label: "JULHO", value: "july", year: "2024" },
    { id: 6, label: "JUNHO", value: "june", year: "2024" },
    { id: 5, label: "MAIO", value: "may", year: "2024" },
    { id: 4, label: "ABRIL", value: "april", year: "2024" },
    { id: 3, label: "MARÇO", value: "march", year: "2024" },
    { id: 2, label: "FEVEREIRO", value: "february", year: "2024" },
    { id: 1, label: "JANEIRO", value: "january", year: "2024" },
  ]);
  const [balanceTotal, setBalanceTotal] = useState(0);

  async function getResumeBalanceMonth() {
    try {
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await getResumeBalanceMonthApi(
        user.community,
        selectedOption.year,
        selectedOption.month,
        token
      );
      if (response.status === 200) {
        setItemBoxBalanceSelected(Object.values(response.data));
      } else {
        throw new Error(
          "Não foi possível carregar o resumo financeiro do mês."
        );
      }
    } catch (error) {
      modalAlert("Ops!", error.message);
    } finally {
      setIndicatorVisible(false);
    }
  }

  useEffect(() => {
    getResumeBalanceMonth();
  }, [selectedOption, modalVisible]);

  useEffect(() => {
    setIndicatorVisible(true);
  }, []);

  const renderContent = () => {
    if (indicatorVisible) {
      return <LoadingIndicator />;
    }

    if (!showExtract) {
      return (
        <ItemBoxBalanceContent
          modalVisible={modalVisible}
          setIndicatorVisible={setIndicatorVisible}
          setShowExtract={setShowExtract}
          setBalanceTotal={setBalanceTotal}
          setSelectedMonth={(month) =>
            setSelectedOption((prev) => ({ ...prev, month }))
          }
        />
      );
    }

    return (
      <View>
        <View style={styles.boxFiltersAndMain}>
          <BoxFilters
            style={styles.boxFilters}
            options={monthList}
            selectedValue={selectedOption}
            onValueChange={(value) => setSelectedOption(value)}
          />
          <View style={styles.main}>
            <ItemFinanceiroContent
              selectedOption={selectedOption}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              setItemFinanceiroClicked={setItemFinanceiroClicked}
            />
          </View>
        </View>
        <View style={styles.boxBalance}>
          <BoxBalance
            month={""}
            previousBalance={itemBoxBalanceSelected[0]?.last_month}
            input={itemBoxBalanceSelected[0]?.input}
            output={itemBoxBalanceSelected[0]?.output}
            recipe={itemBoxBalanceSelected[0]?.recipe}
            setShowExtract={setShowExtract}
            disableOpacity={true}
          />
        </View>
      </View>
    );
  };

  return (
    <>
      <PageBase
        title="Financeiro"
        signButtonAdd={true}
        onPressAdd={() => {
          setModalVisible(true);
          setItemFinanceiroClicked({});
        }}
      >
        <View style={styles.container}>{renderContent()}</View>

        <ModalLancamento
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          itemClicked={itemFinanceiroClicked}
        />

        {showExtract ? (
          <TouchableOpacity
            style={styles.buttonAnnualSummary}
            activeOpacity={0.7}
            onPress={() => {
              setIndicatorVisible(true);
              setTimeout(() => {
                setShowExtract(false);
                setIndicatorVisible(false);
              }, 500);
            }}
          >
            <Text style={styles.textAnnualSummary}>Ver Resumo Anual</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.boxTotalBalance}>
            <Text style={styles.textTotalBalance}>Total: </Text>
            <Text
              style={[
                styles.textTotalBalance,
                balanceTotal >= 0 ? styles.positive : styles.negative,
                styles.valueTotal,
              ]}
            >
              {formatValueFinancial(balanceTotal)}
            </Text>
          </View>
        )}
      </PageBase>
    </>
  );
}
