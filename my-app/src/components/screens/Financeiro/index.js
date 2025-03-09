import React, { useContext, useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, TouchableHighlight } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
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
import { formatValueFinancial } from "./functions";

export default function Financeiro({}) {
  const { user } = useContext(AuthContext);
  const { modalAlert } = useContext(ModalContext);
  const [showExtract, setShowExtract] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [indicatorVisible, setIndicatorVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    month: "january",
    year: "2025",
  });
  const [itemFinanceiroClicked, setItemFinanceiroClicked] = useState({});
  const [itemBoxBalanceSelected, setItemBoxBalanceSelected] = useState({});
  const [monthList] = useState([
    { id: 12, label: "DEZEMBRO", value: "december", year: "2025" },
    { id: 11, label: "NOVEMBRO", value: "november", year: "2025" },
    { id: 10, label: "OUTUBRO", value: "october", year: "2025" },
    { id: 9, label: "SETEMBRO", value: "september", year: "2025" },
    { id: 8, label: "AGOSTO", value: "august", year: "2025" },
    { id: 7, label: "JULHO", value: "july", year: "2025" },
    { id: 6, label: "JUNHO", value: "june", year: "2025" },
    { id: 5, label: "MAIO", value: "may", year: "2025" },
    { id: 4, label: "ABRIL", value: "april", year: "2025" },
    { id: 3, label: "MARÇO", value: "march", year: "2025" },
    { id: 2, label: "FEVEREIRO", value: "february", year: "2025" },
    { id: 1, label: "JANEIRO", value: "january", year: "2025" },
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

  // O useEffect abaixo não será executado no primeiro carregamento da tela, só quando houver alteração em selectedOption ou modalVisible.
  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current) {
      getResumeBalanceMonth();
    } else {
      isMounted.current = true;
    }
  }, [selectedOption, modalVisible]);

  const renderContent = () => {
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
      <PageBase title="Financeiro" signButtonAdd={false}>
        <View style={styles.container}>{renderContent()}</View>

        <View style={styles.footer}>
          {showExtract ? (
            <TouchableOpacity
              style={styles.buttonFooter}
              activeOpacity={0.7}
              onPress={() => {
                setTimeout(() => {
                  setShowExtract(false);
                }, 500);
              }}
            >
              <Text style={styles.textButtonFooter}>Ver Resumo Anual</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.buttonFooter}>
              <Text style={styles.textButtonFooter}>Total: </Text>
              <Text
                style={[
                  styles.textButtonFooter,
                  balanceTotal >= 0 ? styles.positive : styles.negative,
                  styles.valueTotal,
                ]}
              >
                {formatValueFinancial(balanceTotal)}
              </Text>
            </View>
          )}

          <TouchableHighlight
            style={styles.boxButtonAdd}
            underlayColor={"#358DD4"}
            onPress={() => {
              setModalVisible(true);
              setItemFinanceiroClicked({});
            }}
          >
            <FontAwesome5 name="plus" style={styles.iconAdd} />
          </TouchableHighlight>
        </View>

        <ModalLancamento
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          itemClicked={itemFinanceiroClicked}
        />
      </PageBase>
    </>
  );
}
