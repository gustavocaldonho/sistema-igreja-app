import React, { useState, useContext } from "react";
import ItemAvisoContent from "./ItemAvisoContent";
import ModalWarnings from "./ModalWarnings";
import PageBase from "../PageBase";
import { AuthContext } from "../../../contexts/auth";

export default function Avisos({ navigation }) {
  const [itemClicked, setItemClicked] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [formModalDefaultVisible, setFormModalDefaultVisible] = useState(true);
  const { warningList, setWarningList } = useContext(AuthContext);

  function onPressButtonAdd() {
    setModalVisible(!modalVisible);
    setFormModalDefaultVisible(true);
    setItemClicked("");
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
