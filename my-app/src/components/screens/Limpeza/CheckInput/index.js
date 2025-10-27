import React, { useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ModalContext } from "../../../../contexts/modalContext";
import { updateCleaningItem } from "../../../../services/cleaning_api";
import { formatInReal } from "../../Dizimo/functions";

const CheckInput = ({
  idItem,
  payed,
  month,
  value,
  setPayedState,
  setLoadingCheckInput,
  updateItemsChecked,
  unitValue,
  valuePayed,
  setValuePayed,
}) => {
  const { modalAlert } = useContext(ModalContext);

  async function toggleChecked() {
    try {
      setLoadingCheckInput(true);
      const token = await AsyncStorage.getItem("AccessToken");
      // Define o novo valor a ser enviado (0 se desmarcar, unitValue se marcar)
      const newValue = payed ? 0 : unitValue;
      const response = await updateCleaningItem(idItem, newValue, token);
      if (response.status !== 200) {
        throw new Error("Não foi possível atualizar o item.");
      }
      // Atualiza o estado visual
      setPayedState((prev) => !prev);
      // Atualiza os totais locais e o texto de valor exibido
      if (payed) {
        // Estava marcado → agora desmarca
        updateItemsChecked(-valuePayed, -1);
        setValuePayed(0);
      } else {
        // Estava desmarcado → agora marca
        updateItemsChecked(unitValue, +1);
        setValuePayed(unitValue);
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
