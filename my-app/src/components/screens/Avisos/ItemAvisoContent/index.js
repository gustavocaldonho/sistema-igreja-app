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
import { ModalContext } from "../../../../contexts/modalContext";

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
  const { modalAlert } = useContext(ModalContext);

  const { user } = useContext(AuthContext);

  async function getWarningList(pageNumber) {
    try {
      if (pageNumber === 1) {
        setVisibleIndicator(true);
      } else {
        setLoadingMore(true);
      }

      const token = await AsyncStorage.getItem("AccessToken");
      const response = await getTenWarnings(user.community, token, pageNumber); // Use o número da página passada como argumento

      console.log("page: ", pageNumber);
      console.log(response);

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
        console.log(response);
        throw new Error("Não foi possível retornar a lista de avisos.");
      }
    } catch (error) {
      modalAlert("Ops!", error.message);
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
      const nextPage = page + 1; // Incrementa a página localmente
      setPage(nextPage); // Atualiza o estado com a nova página
      getWarningList(nextPage); // Passa a próxima página diretamente
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
