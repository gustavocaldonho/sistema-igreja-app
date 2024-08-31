import React, { useState } from "react";
import ModalPagamentoDizimo from "./modalPagamento/";
import PageBase from "../PageBase";
import ItemDizimoContent from "./ItemDizimoContent";
import LoadingIndicator from "../../auxiliary/LoadingIndicator";

export default function Dizimo({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemClicked, setItemClicked] = useState("");
  const [visibleIndicator, setVisibleIndicator] = useState(false);

  return (
    <PageBase title={"Dízimo"}>
      {visibleIndicator ? <LoadingIndicator /> : ""}
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
          setVisibleIndicator={setVisibleIndicator}
        />
      )}
    </PageBase>
  );
}
