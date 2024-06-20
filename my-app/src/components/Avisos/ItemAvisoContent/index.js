import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import ItemAviso from "../ItemAviso";

export default function ItemAvisoContent({
  warningList,
  modalVisible,
  setModalVisible,
  setItemClicked,
}) {
  return (
    <View>
      {warningList.map((w, idx) => (
        <ItemAviso
          id={w.id}
          title={w.title}
          message={w.message}
          setItemClicked={setItemClicked}
          viewed={false}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          key={`warning-item-${idx}`}
        />
      ))}
    </View>
  );
}
