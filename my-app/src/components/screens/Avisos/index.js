import React, { useEffect, useState, useContext } from "react";
import ItemAvisoContent from "./ItemAvisoContent";
import ModalWarnings from "./ModalWarnings";
import PageBase from "../PageBase";
import ToastMessage from "../../auxiliary/ToastMessage";
import { AuthContext } from "../../../contexts/auth";
import LoadingIndicator from "../../auxiliary/LoadingIndicator";

export default function Avisos({ navigation }) {
  const [itemClicked, setItemClicked] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [formModalDefaultVisible, setFormModalDefaultVisible] = useState(true);
  const [errorToast, setErrorToast] = useState(false);
  const [visibleIndicator, setVisibleIndicator] = useState(false);
  const { user } = useContext(AuthContext);

  function onPressButtonAdd() {
    setModalVisible(!modalVisible);
    setFormModalDefaultVisible(true);
    setItemClicked({});
  }

  return (
    <PageBase
      title={"Avisos"}
      signButtonAdd={user.position !== "user" ? true : false}
      onPressAdd={onPressButtonAdd}
    >
      {visibleIndicator ? <LoadingIndicator /> : ""}
      {modalVisible ? (
        <ModalWarnings
          setErrorToast={setErrorToast}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          itemClicked={itemClicked}
          setItemClicked={setItemClicked}
          formModalDefaultVisible={formModalDefaultVisible}
        />
      ) : (
        <ItemAvisoContent
          setErrorToast={setErrorToast}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setItemClicked={setItemClicked}
          setFormModalDefaultVisible={setFormModalDefaultVisible}
          setVisibleIndicator={setVisibleIndicator}
        />
      )}

      {errorToast ? (
        <ToastMessage
          type="error"
          text1="Erro"
          text2="Tente novamente mais tarde."
        />
      ) : (
        ""
      )}
    </PageBase>
  );
}
