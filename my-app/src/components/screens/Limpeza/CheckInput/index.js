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
  setPayedState,
  setLoadingCheckInput,
  updateItemsChecked,
}) => {
  const { modalAlert } = useContext(ModalContext);

  async function toggleChecked() {
    try {
      setLoadingCheckInput(true);
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await updateCleaningItem(idItem, !payed, token);
      if (response.status !== 200) {
        throw new Error("Não foi possível atualizar o item.");
      } else {
        setPayedState((prev) => !prev);
        if (!payed) console.log("Checked");
        updateItemsChecked(!payed ? 1 : -1);
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
