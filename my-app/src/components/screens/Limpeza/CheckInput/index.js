import React, { useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ModalContext } from "../../../../contexts/modalContext";
import { updateCleaningItem } from "../../../../services/cleaning_api";

const CheckInput = ({
  idItem,
  payed,
  month,
  value,
  setPayedState,
  setLoadingCheckInput,
  updateItemsChecked,
  unitValue,
}) => {
  const { modalAlert } = useContext(ModalContext);

  async function toggleChecked() {
    try {
      // Quando é desmarcado o checked, zera o pagamento da pessoa
      if (payed) {
        unitValue = 100; //api nao está aceitando zero -> corrigir (lembrar de trocar para zero)

        updateCleaningItem(
          //reduzir 1 de checkedItems
          //diminuir o valor do item de valueTotal
        )
      }
      setLoadingCheckInput(true);
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await updateCleaningItem(idItem, unitValue, token);
      // console.log(`id: ${idItem}, unitValue: ${unitValue}, token: ${token}`)
      // console.log('response ', response);
      if (response.status !== 200) {
        throw new Error("Não foi possível atualizar o item.");
      } else {
        setPayedState((prev) => !prev);
        // updateItemsChecked(unitValue);
      }
    } catch (error) {
      modalAlert("Ops!", error.message);
    } finally {
      setLoadingCheckInput(false);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleChecked} style={styles.checkbox}>
        {payed ? (
          <Ionicons name="checkbox" size={24} color="#287BBF" />
        ) : (
          <Ionicons name="square-outline" size={24} color="#aaa" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CheckInput;
