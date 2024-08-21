import React, { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import ItemUser from "../ItemUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUsersCommunity } from "../../../../services/user_api";
import { AuthContext } from "../../../../contexts/auth";

export default function ItemUserContent({ navigation, setVisibleIndicator }) {
  const { user } = useContext(AuthContext);
  const [userList, setUserList] = useState([]);

  async function getUsersForm() {
    try {
      setVisibleIndicator(true);
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await getUsersCommunity(user.community, token);
      if (response.status === 200) {
        setUserList(response.data);
        setVisibleIndicator(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsersForm();
  }, []);

  return (
    <View>
      {userList.map((user, idx) => (
        <ItemUser
          name={user.name}
          cpf={user.cpf}
          navigation={navigation}
          key={`item-user-${idx}`}
        />
      ))}
    </View>
  );
}
