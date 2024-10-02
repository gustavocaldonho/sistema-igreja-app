import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import ItemAviso from "../ItemAviso";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getTenWarnings } from "../../../../services/warning_api";
import { AuthContext } from "../../../../contexts/auth";
import AlertMsg from "../../../auxiliary/AlertMsg";

export default function ItemAvisoContent({
  modalVisible,
  setModalVisible,
  setItemClicked,
  setFormModalDefaultVisible,
  setVisibleIndicator,
  visibleIndicator,
}) {
  const [warningList, setWarningList] = useState([]);
  const [page, setPage] = useState(1); // Página inicial
  const [loadingMore, setLoadingMore] = useState(false); // Estado para carregamento adicional
  const [hasMoreWarnings, setHasMoreWarnings] = useState(true); // Controle se há mais avisos

  const { user } = useContext(AuthContext);

  async function getWarningList(pageNumber) {
    try {
      if (pageNumber === 1) {
        setVisibleIndicator(true); // Exibe o indicador na primeira carga
      } else {
        setLoadingMore(true); // Mostra um indicador para carregamento adicional
      }

      const token = await AsyncStorage.getItem("AccessToken");
      const response = await getTenWarnings(user.community, token, pageNumber); // Envie o número da página para a API

      if (response.status === 200) {
        const newWarnings = response.data;

        if (newWarnings.length > 0) {
          setWarningList((prevWarnings) => [...prevWarnings, ...newWarnings]); // Adiciona novos avisos à lista

          // Se o número de avisos retornados for menor que 10, significa que é a última página
          if (newWarnings.length < 10) {
            setHasMoreWarnings(false); // Não há mais avisos para carregar
          }
        } else {
          setHasMoreWarnings(false); // Não há mais avisos para carregar
        }
      } else {
        AlertMsg("Não retornou a lista de avisos.");
      }
    } catch (error) {
      AlertMsg(`Falha na requisição. ${error}`);
    } finally {
      setVisibleIndicator(false);
      setLoadingMore(false);
    }
  }

  useEffect(() => {
    getWarningList(1); // Carrega a primeira página ao iniciar
  }, []);

  // Função chamada quando o usuário chega ao fim da lista
  const loadMoreWarnings = () => {
    if (hasMoreWarnings && !loadingMore) {
      setPage((prevPage) => prevPage + 1); // Incrementa o número da página
      getWarningList(page + 1); // Carrega a próxima página
      // console.log("page: ", page);
    }
  };

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        {loadingMore ? <ActivityIndicator size="large" color="#fff" /> : null}
      </View>
    );
  };

  return (
    <View>
      {warningList.length !== 0 ? (
        <FlatList
          data={warningList}
          keyExtractor={(item, index) => `warning-item-${index}`}
          renderItem={({ item }) => (
            <ItemAviso
              id={item.id}
              title={item.title}
              description={item.description}
              scope={item.scope}
              viewed={false}
              setItemClicked={setItemClicked}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              setFormModalDefaultVisible={setFormModalDefaultVisible}
            />
          )}
          onEndReached={loadMoreWarnings} // Função chamada ao chegar no final
          onEndReachedThreshold={0.1} // Define o quão perto do final da lista deve estar para carregar mais itens
          ListFooterComponent={renderFooter} // Exibe o indicador de carregamento ao final
          showsVerticalScrollIndicator={false}
        />
      ) : !visibleIndicator ? (
        <Text style={styles.msgContentEmpty}>
          Ainda não foi inserido nenhum aviso
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
