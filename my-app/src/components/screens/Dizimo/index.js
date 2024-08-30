import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import ModalPagamentoDizimo from "./modalPagamento/";
import PageBase from "../PageBase";
import ItemDizimoContent from "./ItemDizimoContent";

export default function Dizimo({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemClicked, setItemClicked] = useState("");

  return (
    <PageBase title={"Dízimo"}>
      {modalVisible ? (
        <ModalPagamentoDizimo
          year={itemClicked.year}
          month={itemClicked.month}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      ) : (
        <ItemDizimoContent
          setModalVisible={setModalVisible}
          setItemClicked={setItemClicked}
        />
      )}
    </PageBase>
  );
}
