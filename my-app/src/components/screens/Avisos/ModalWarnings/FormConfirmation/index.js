import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import stylesModal from "../style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deleteWarning } from "../../../../../services/warning_api";

export default function FormConfirmation({
  // warningList,
  // setWarningList,
  itemClicked,
  setItemClicked,
  setModalVisible,
  modalVisible,
}) {
  // function removeItemFromList(id) {
  //   const newList = [...warningList];
  //   let itemIndex = "";
  //   for (let i = 0; i < newList.length; i++) {
  //     if (newList[i].id === id) {
  //       itemIndex = newList.indexOf(newList[i]);
  //     }
  //   }
  //   newList.splice(itemIndex, 1);
  //   setWarningList(newList);
  //   setModalVisible(!modalVisible);
  // }

  async function deleteWarningForm(id) {
    const token = await AsyncStorage.getItem("AccessToken");
    const response = await deleteWarning(id, token);

    if (response.status === 200) {
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
