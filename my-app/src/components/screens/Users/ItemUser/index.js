import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserByCpf } from "../../../../services/user_api";
import AlertMsg from "../../../auxiliary/AlertMsg";

export default function ItemUser(props) {
  const [userItem, setUserItem] = useState([]);

  async function getDatasUser() {
    try {
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await getUserByCpf(props.cpf, token);
      if (response.status === 200) {
        setUserItem(response.data);
      } else {
        AlertMsg("Não foi possível obter as informações do usuário.");
      }
    } catch (error) {
      AlertMsg("Falha na requisição.", error);
    }
  }

  useEffect(() => {
    getDatasUser();
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        console.log(userItem);
        props.navigation.navigate("PerfilUser", {
          name: userItem.name,
          cpf: userItem.cpf,
          birthday: userItem.birthday,
          phone: userItem.phone,
          community: userItem.community,
        });
      }}
    >
      <View style={styles.boxItem}>
        <View style={styles.boxIconLeft}>
          <Icon name="user" style={styles.iconUser} />
        </View>
        <View style={styles.boxName}>
          <Text style={styles.textName}>{props.name}</Text>
        </View>
        <View style={styles.boxIconRight}>
          <Icon name="chevron-right" style={styles.iconRight} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
