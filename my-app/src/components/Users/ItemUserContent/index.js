import React from "react";
import { View } from "react-native";
import ItemUser from "../ItemUser";

export default function ItemUserContent({ navigation, userList }) {
  return (
    <View>
      {userList.map((user, idx) => (
        <ItemUser
          name={user.name}
          cpf={user.cpf}
          dataNasc={user.dataNasc}
          email={user.email}
          comunidade={user.comunidade}
          navigation={navigation}
          key={`item-user-${idx}`}
        />
      ))}
    </View>
  );
}
