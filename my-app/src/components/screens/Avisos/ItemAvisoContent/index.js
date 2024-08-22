import React, { useEffect, useState, useContext } from "react";
import { View } from "react-native";
import ItemAviso from "../ItemAviso";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getTenWarnings } from "../../../../services/warning_api";
import { AuthContext } from "../../../../contexts/auth";
import AlertMsg from "../../../auxiliary/AlertMsg";
import LoadingIndicator from "../../../auxiliary/LoadingIndicator";

export default function ItemAvisoContent({
  modalVisible,
  setModalVisible,
  setItemClicked,
  setFormModalDefaultVisible,
  setVisibleIndicator,
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
      {warningList.map((w, idx) => (
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
      ))}
    </View>
  );
}
