import React, { useState } from "react";
import ItemAvisoContent from "./ItemAvisoContent";
import ModalWarnings from "./ModalWarnings";
import PageBase from "../PageBase";

export default function Avisos({ navigation }) {
  const [itemClicked, setItemClicked] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [formModalDefaultVisible, setFormModalDefaultVisible] = useState(true);

  function onPressButtonAdd() {
    setModalVisible(!modalVisible);
    setFormModalDefaultVisible(true);
    setItemClicked({});
  }

  return (
    <PageBase
      title={"Avisos"}
      signButtonAdd={true}
      onPressAdd={onPressButtonAdd}
    >
      {modalVisible ? (
        <ModalWarnings
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          itemClicked={itemClicked}
          setItemClicked={setItemClicked}
          formModalDefaultVisible={formModalDefaultVisible}
        />
      ) : (
        <ItemAvisoContent
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setItemClicked={setItemClicked}
          setFormModalDefaultVisible={setFormModalDefaultVisible}
        />
      )}
    </PageBase>
  );
}
