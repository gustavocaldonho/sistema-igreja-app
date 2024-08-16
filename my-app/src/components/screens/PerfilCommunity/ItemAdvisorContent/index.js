import React, { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import ItemAdvisor from "../ItemAdvisor";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../../contexts/auth";

export default function ItemAdvisorContent({
  advisorModalVisible,
  setAdvisorModalVisible,
  setItemAdvisorClicked,
  setFormModalAdvisorDefaultVisible,
}) {
  const { user } = useContext(AuthContext);
  const [advisorList, setAdvisorList] = useState([
    { cpf: "10", name: "Elizabeth Suann", responsibility: "Diretor Geral" },
    {
      cpf: "12",
      name: "Marcos Antônio da Silva",
      responsibility: "Tesoureiro",
    },
    { cpf: "13", name: "Estevão Soares de Souza", responsibility: "Catecismo" },
    { cpf: "14", name: "Milena Gomes Araújo", responsibility: "Cemitério" },
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
          cpf={a.cpf}
          name={a.name}
          responsibility={a.responsibility}
          setItemAdvisorClicked={setItemAdvisorClicked}
          advisorModalVisible={advisorModalVisible}
          setAdvisorModalVisible={setAdvisorModalVisible}
          setFormModalAdvisorDefaultVisible={setFormModalAdvisorDefaultVisible}
          key={`item-advisor-${idx}`}
        />
      ))}
    </View>
  );
}
