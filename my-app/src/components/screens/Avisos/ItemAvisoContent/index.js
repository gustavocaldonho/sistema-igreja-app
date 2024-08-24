import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import ItemAviso from "../ItemAviso";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getTenWarnings } from "../../../../services/warning_api";
import { AuthContext } from "../../../../contexts/auth";
import AlertMsg from "../../../auxiliary/AlertMsg";

export default function ItemAvisoContent({
  modalVisible,
  setModalVisible,
  setItemClicked,
  setFormModalDefaultVisible,
  setVisibleIndicator,
  visibleIndicator,
}) {
  const [warningList, setWarningList] = useState([]);
  const { user } = useContext(AuthContext);

  async function getWarningListForm() {
    try {
      setVisibleIndicator(true);
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await getTenWarnings(user.community, token);
      if (response.status === 200) {
        setWarningList(response.data);
      } else {
        AlertMsg("Não retornou a lista de avisos.");
      }
      setVisibleIndicator(false);
    } catch (error) {
      AlertMsg(`Falha na requisição. ${error}`);
    }
  }

  useEffect(() => {
    getWarningListForm();
  }, []);

  return (
    <View>
      {warningList.length !== 0 ? (
        warningList.map((w, idx) => (
          <ItemAviso
            id={w.id}
            title={w.title}
            description={w.description}
            scope={w.scope}
            viewed={false}
            setItemClicked={setItemClicked}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            setFormModalDefaultVisible={setFormModalDefaultVisible}
            key={`warning-item-${idx}`}
          />
        ))
      ) : !visibleIndicator ? (
        <Text style={styles.msgContentEmpty}>
          Ainda não foi inserido nenhum aviso
        </Text>
      ) : (
        ""
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  msgContentEmpty: {
    color: "#fff",
    alignSelf: "center",
    marginTop: 20,
  },
});
