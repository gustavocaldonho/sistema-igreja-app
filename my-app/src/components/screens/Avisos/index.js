import React, { useEffect, useState, useContext } from "react";
import ItemAvisoContent from "./ItemAvisoContent";
import ModalWarnings from "./ModalWarnings";
import PageBase from "../PageBase";
import ToastMessage from "../../auxiliary/ToastMessage";
import { AuthContext } from "../../../contexts/auth";
import LoadingIndicator from "../../auxiliary/LoadingIndicator";
import ModalViews from "./ModalViews";

export default function Avisos({ navigation }) {
  const [itemClicked, setItemClicked] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [modalViewsVisible, setModalViewsVisible] = useState(false);
  const [formModalDefaultVisible, setFormModalDefaultVisible] = useState(true);
  const [errorToast, setErrorToast] = useState(false);
  const [visibleIndicator, setVisibleIndicator] = useState(false);
  const { user } = useContext(AuthContext);

  const [peopleList, setPeopleList] = useState([
    { cpf: "12345678909", name: "João", date: "12:47 - 22.03.25" },
    { cpf: "12345678911", name: "Marcos", date: "12:47 - 22.03.25" },
    { cpf: "14734570760", name: "Gustavo", date: "12:47 - 22.03.25" },
    { cpf: "64390349618", name: "Fernanda", date: "12:47 - 22.03.25" },
    { cpf: "60969897957", name: "Fernanda", date: "12:47 - 22.03.25" },
    { cpf: "41694701571", name: "Lucas", date: "12:47 - 22.03.25" },
    { cpf: "12620728215", name: "Maria", date: "12:47 - 22.03.25" },
    { cpf: "34650688130", name: "Maria", date: "12:47 - 22.03.25" },
    { cpf: "62012210414", name: "Lucas", date: "12:47 - 22.03.25" },
    { cpf: "83140902963", name: "João", date: "12:47 - 22.03.25" },
    { cpf: "58278885873", name: "Gustavo", date: "12:47 - 22.03.25" },
    { cpf: "37753275248", name: "Maria", date: "12:47 - 22.03.25" },
    { cpf: "33259178449", name: "Gustavo", date: "12:47 - 22.03.25" },
    { cpf: "70250194325", name: "Beatriz", date: "12:47 - 22.03.25" },
    { cpf: "17159054430", name: "Maria", date: "12:47 - 22.03.25" },
  ]);

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
          visibleIndicator={visibleIndicator}
          setModalViewsVisible={setModalViewsVisible}
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

      <ModalViews
        visible={modalViewsVisible}
        setModalViewsVisible={setModalViewsVisible}
        peopleList={peopleList}
      />
    </PageBase>
  );
}
