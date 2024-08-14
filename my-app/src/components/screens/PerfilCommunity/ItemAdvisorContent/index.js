import React, { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import ItemAdvisor from "../ItemAdvisor";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../../contexts/auth";

export default function ItemAdvisorContent() {
  const { user } = useContext(AuthContext);
  const [advisorList, setAdvisorList] = useState([
    { name: "Elizabeth Suann", function: "Diretor Geral" },
    { name: "Marcos Antônio da Silva", function: "Tesoureiro" },
    { name: "Estevão Soares de Souza", function: "Catecismo" },
    { name: "Milena Gomes Araújo", function: "Cemitério" },
  ]);

  //   async function getUsersForm() {
  //     const token = await AsyncStorage.getItem("AccessToken");
  //     const response = await getUsersCommunity(user.community, token);
  //     if (response.status === 200) {
  //       setUserList(response.data);
  //     }
  //   }

  //   useEffect(() => {
  //     getUsersForm();
  //   }, []);

  return (
    <View>
      {advisorList.map((a, idx) => (
        <ItemAdvisor
          name={a.name}
          function={a.function}
          key={`item-advisor-${idx}`}
        />
      ))}
    </View>
  );
}
