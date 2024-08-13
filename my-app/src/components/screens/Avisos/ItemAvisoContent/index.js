import React, { useEffect, useState } from "react";
import { View } from "react-native";
import ItemAviso from "../ItemAviso";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getTenWarnings } from "../../../../services/warning_api";

export default function ItemAvisoContent({
  warningList,
  setWarningList,
  modalVisible,
  setModalVisible,
  setItemClicked,
  setFormModalDefaultVisible,
}) {
  const [warningList, setWarningList] = useState([]);

  async function getWarningListForm() {
    const token = await AsyncStorage.getItem("AccessToken");
    const response = await getTenWarnings(token);
    if (response.status === 200) {
      setWarningList(response.data);
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
          warningList={warningList}
          setWarningList={setWarningList}
          setItemClicked={setItemClicked}
          viewed={false}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setFormModalDefaultVisible={setFormModalDefaultVisible}
          key={`warning-item-${idx}`}
        />
      ))}
    </View>
  );
}
