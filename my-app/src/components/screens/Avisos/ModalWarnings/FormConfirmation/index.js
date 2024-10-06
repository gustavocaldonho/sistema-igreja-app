import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import stylesModal from "../style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deleteWarning } from "../../../../../services/warning_api";
import AlertMsg from "../../../../auxiliary/AlertMsg";

export default function FormConfirmation({
  itemClicked,
  setItemClicked,
  setModalVisible,
  modalVisible,
}) {
  async function deleteWarningForm(id) {
    try {
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await deleteWarning(id, token);
      if (response.status === 204) {
        setModalVisible(!modalVisible);
      } else {
        throw new Error("Não foi possível excluir o aviso.");
      }
    } catch (error) {
      AlertMsg(`Falha na requisição. ${error}`);
    } finally {
      setModalVisible(!modalVisible);
    }
  }

  return (
    <View>
      <Text style={styles.titleConfirmation}>Deseja excluir este aviso?</Text>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={stylesModal.boxButton}
          onPress={() => deleteWarningForm(itemClicked.id)}
        >
          <Text style={stylesModal.textButton}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={stylesModal.boxButton}
          onPress={() => {
            setModalVisible(!modalVisible);
            setItemClicked({});
          }}
        >
          <Text style={stylesModal.textButton}>Não</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
