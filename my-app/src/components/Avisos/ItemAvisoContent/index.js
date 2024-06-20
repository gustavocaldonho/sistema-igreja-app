import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import ItemAviso from "../ItemAviso";

export default function ItemAvisoContent({
  warningList,
  setWarningList,
  modalVisible,
  setModalVisible,
  setItemClicked,
  setFormModalDefaultVisible,
}) {
  return (
    <View>
      {warningList.map((w, idx) => (
        <ItemAviso
          id={w.id}
          title={w.title}
          message={w.message}
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
