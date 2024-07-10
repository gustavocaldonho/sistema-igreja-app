import React, { useState } from "react";
import ItemAvisoContent from "./ItemAvisoContent";
import ModalWarnings from "./ModalWarnings";
import PageBase from "../PageBase";

export default function Avisos({ navigation }) {
  const [warningList, setWarningList] = useState([
    { id: 0, title: "Título 0", message: "Mensagem", visibleToParish: false },
    { id: 1, title: "Título 1", message: "Mensagem", visibleToParish: false },
    { id: 2, title: "Título 2", message: "Mensagem", visibleToParish: false },
  ]);
  const [itemClicked, setItemClicked] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [formModalDefaultVisible, setFormModalDefaultVisible] = useState(true);

  function onPressButtonAdd() {
    setModalVisible(!modalVisible);
    setFormModalDefaultVisible(true);
    setItemClicked("");
  }

  return (
    <PageBase
      title={"Avisos"}
      navigation={navigation}
      statusBarColor={"#fff"}
      signButtonAdd={true}
      onPressAdd={onPressButtonAdd}
    >
      {modalVisible ? (
        <ModalWarnings
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          warningList={warningList}
          setWarningList={setWarningList}
          itemClicked={itemClicked}
          setItemClicked={setItemClicked}
          formModalDefaultVisible={formModalDefaultVisible}
        />
      ) : (
        <ItemAvisoContent
          warningList={warningList}
          setWarningList={setWarningList}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setItemClicked={setItemClicked}
          setFormModalDefaultVisible={setFormModalDefaultVisible}
        />
      )}
    </PageBase>
  );
}
