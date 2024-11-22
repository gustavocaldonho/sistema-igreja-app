import React, { useState, useContext, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ItemUser from "../ItemUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUsersCommunity } from "../../../../services/user_api";
import { AuthContext } from "../../../../contexts/auth";
import { ModalContext } from "../../../../contexts/modalContext";

export default function ItemUserContent({ navigation, setVisibleIndicator }) {
  const { user } = useContext(AuthContext);
  const [userList, setUserList] = useState([]);
  const { modalAlert } = useContext(ModalContext);

  async function getUsersForm() {
    try {
      setVisibleIndicator(true);
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await getUsersCommunity(user.community, token);

      if (response && response.status === 200 && Array.isArray(response.data)) {
        setUserList(response.data);
      } else {
        throw new Error("Não foi possível obter a lista de usuários.");
      }
    } catch (error) {
      modalAlert("Ops!", error.message);
    } finally {
      setVisibleIndicator(false);
    }
  }

  useEffect(() => {
    getUsersForm();
  }, []);

  const renderItem = ({ item }) => (
    <ItemUser
      name={item.name || "Nome não disponível"}
      cpf={item.cpf || "CPF não disponível"}
      navigation={navigation}
    />
  );

  return (
    <View>
      <FlatList
        data={userList}
        keyExtractor={(item, index) => `item-user-${index}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: 100 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
