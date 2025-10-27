import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import ItemCleaning from "../ItemCleaning";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ModalContext } from "../../../../contexts/modalContext";
import { getCleaningItems } from "../../../../services/cleaning_api";
import { countCleaningItems, sortCleaningItems } from "../functions";

export default function ItemCleaningContent({
  selectedOption,
  setVisibleIndicatorMain,
  setTotalItemsChecked,
  updateItemsChecked,
  unitValue,
}) {
  const [cleaningItemsList, setCleaningItemsList] = useState([]);
  const [page, setPage] = useState(1); // Página inicial
  // const [loadingMore, setLoadingMore] = useState(false);
  // const [hasMoreItemsCleaning, setHasMoreItemsCleaning] = useState(true);
  const [visibleIndicator, setVisibleIndicator] = useState(false);
  const { modalAlert } = useContext(ModalContext);

  async function getCleaningItemsList() {
    try {
      // if (pageNumber === 1) {
      //   setVisibleIndicator(true);
      // } else {
      //   setLoadingMore(true);
      // }

      setVisibleIndicatorMain(true);
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await getCleaningItems(
        selectedOption.month,
        selectedOption.year,
        token
      );

      // console.log(response.data);

      if (response.status === 200) {
        const newCleaningItems = response.data;

        if (newCleaningItems.length > 0) {
          setCleaningItemsList((prevCleaningItems) => [
            ...prevCleaningItems,
            ...sortCleaningItems(newCleaningItems),
          ]);
          // Adiciona novos itens de limpeza à lista

          // Se o número de itens de limpeza retornados for menor que 10, significa que é a última página
          // if (newCleaningItems.length < 10) {
          // setHasMoreItemsCleaning(false); // Não há mais itens de limpeza para carregar
        }
        // } else {
        // setHasMoreItemsCleaning(false); // Não há mais itens de limpeza para carregar
        // }
      } else {
        throw new Error(
          "Não foi possível retornar a lista de itens de limpeza."
        );
      }
    } catch (error) {
      modalAlert("Ops!", error.message);
    } finally {
      setVisibleIndicatorMain(false);
      setVisibleIndicator(false);
      // setLoadingMore(false);
    }
  }

  useEffect(() => {
    setCleaningItemsList([]);
    setVisibleIndicatorMain(true);
    getCleaningItemsList(1);
  }, [selectedOption]);

  useEffect(() => {
    setTotalItemsChecked(countCleaningItems(cleaningItemsList));
  }, [cleaningItemsList]);

  // Função chamada quando o usuário chega ao fim da lista
  const loadMoreCleaningItems = () => {
    if (hasMoreItemsCleaning && !loadingMore && !visibleIndicator) {
      const nextPage = page + 1; // Incrementa a página localmente
      setPage(nextPage); // Atualiza o estado com a nova página
      getCleaningItemsList(nextPage); // Passa a próxima página diretamente
    }
  };

  // const renderFooter = () => {
  //   return (
  //     <View style={styles.footer}>
  //       {loadingMore ? (
  //         <ActivityIndicator size="large" color="#339dd7" />
  //       ) : null}
  //     </View>
  //   );
  // };

  return (
    <View>
      {cleaningItemsList.length !== 0 ? (
        <FlatList
          data={cleaningItemsList}
          keyExtractor={(item, index) => `cleaning-item-${index}`}
          renderItem={({ item }) => (
            <ItemCleaning
              id={item.id}
              name={item.name}
              payed={item.value === null || item.value === 0 ? false : true}
              month={item.month}
              setor={item.setor}
              value={item.value}
              updateItemsChecked={updateItemsChecked}
              unitValue={unitValue}
            />
          )}
          // onEndReached={loadMoreCleaningItems} // Função chamada ao chegar no final
          // onEndReachedThreshold={0.1} // Define o quão perto do final da lista deve estar para carregar mais itens
          // ListFooterComponent={renderFooter} // Exibe o indicador de carregamento ao final
          showsVerticalScrollIndicator={true}
        />
      ) : !visibleIndicator ? (
        <Text style={styles.msgContentEmpty}>
          Ainda não foi inserido nenhum item de limpeza.
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
});
