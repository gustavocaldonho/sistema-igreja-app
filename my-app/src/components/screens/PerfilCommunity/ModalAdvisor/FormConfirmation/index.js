import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import stylesModal from "../style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { upgradeUser } from "../../../../../services/user_api";

export default function FormConfirmation({
  itemAdvisorClicked,
  setItemAdvisorClicked,
  setAdvisorModalVisible,
  advisorModalVisible,
}) {
  async function deleteAdvisorForm(cpf) {
    const token = await AsyncStorage.getItem("AccessToken");
    const response = await upgradeUser(
      { cpf, position: "user", responsibility: "faithful" },
      token
    );
    if (response.status === 204) {
      setAdvisorModalVisible(!advisorModalVisible);
    }
  }

  return (
    <View>
      <Text style={styles.titleConfirmation}>
        Deseja excluir este Conselheiro?
      </Text>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={stylesModal.boxButton}
          onPress={() => {
            deleteAdvisorForm(itemAdvisorClicked.cpf);
          }}
        >
          <Text style={stylesModal.textButton}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={stylesModal.boxButton}
          onPress={() => {
            setAdvisorModalVisible(!advisorModalVisible);
            setItemAdvisorClicked({});
          }}
        >
          <Text style={stylesModal.textButton}>Não</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
