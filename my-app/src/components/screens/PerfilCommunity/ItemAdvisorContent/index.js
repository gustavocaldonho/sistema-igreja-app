import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import ItemAdvisor from "../ItemAdvisor";
import { getCouncils } from "../../../../services/user_api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ModalContext } from "../../../../contexts/modalContext";

export default function ItemAdvisorContent({
  patron,
  advisorModalVisible,
  setAdvisorModalVisible,
  setItemAdvisorClicked,
  setFormModalAdvisorDefaultVisible,
}) {
  const [advisorList, setAdvisorList] = useState([]);
  const { modalAlert } = useContext(ModalContext);

  async function getCouncilsForm(patron) {
    try {
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await getCouncils(patron, token);
      if (response.status === 200) {
        setAdvisorList(response.data);
      } else {
        throw new Error("Não foi possível obter a lista de conselheiros.");
      }
    } catch (error) {
      modalAlert("Ops!", error.message);
    }
  }

  useEffect(() => {
    getCouncilsForm(patron);
  }, []);

  return (
    <View>
      {advisorList.length !== 0 ? (
        advisorList.map((a, idx) => (
          <ItemAdvisor
            cpf={a.cpf}
            name={a.name}
            responsibility={a.responsability}
            setItemAdvisorClicked={setItemAdvisorClicked}
            advisorModalVisible={advisorModalVisible}
            setAdvisorModalVisible={setAdvisorModalVisible}
            setFormModalAdvisorDefaultVisible={
              setFormModalAdvisorDefaultVisible
            }
            key={`item-advisor-${idx}`}
          />
        ))
      ) : (
        <Text style={styles.msgContentEmpty}>
          Ainda não foi inserido nenhum membro
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  msgContentEmpty: {
    color: "#fff",
    alignSelf: "center",
  },
});
