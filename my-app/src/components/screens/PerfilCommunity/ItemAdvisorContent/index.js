import React, { useState, useEffect } from "react";
import { View } from "react-native";
import ItemAdvisor from "../ItemAdvisor";
import { getCouncils } from "../../../../services/user_api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AlertMsg from "../../../auxiliary/AlertMsg";

export default function ItemAdvisorContent({
  patron,
  advisorModalVisible,
  setAdvisorModalVisible,
  setItemAdvisorClicked,
  setFormModalAdvisorDefaultVisible,
}) {
  const [advisorList, setAdvisorList] = useState([]);

  async function getCouncilsForm(patron) {
    try {
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await getCouncils(patron, token);
      if (response.status === 200) {
        setAdvisorList(response.data);
      } else {
        AlertMsg("Não foi possível obter a lista de conselheiros.");
      }
    } catch (error) {
      AlertMsg("Falha na requisição.", error);
    }
  }

  useEffect(() => {
    getCouncilsForm(patron);
  }, []);

  return (
    <View>
      {advisorList.map((a, idx) => (
        <ItemAdvisor
          cpf={a.cpf}
          name={a.name}
          responsibility={a.responsability}
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
