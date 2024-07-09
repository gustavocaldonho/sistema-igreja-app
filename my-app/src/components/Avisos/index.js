import React, { useState, useContext } from "react";
import { View } from "react-native";
import styles from "./style";
import ScreenBase from "../ScreenBase";
import ButtonAdd from "../ButtonAdd";
import ItemAvisoContent from "./ItemAvisoContent";
import ModalWarnings from "./ModalWarnings";

import { AuthContext } from "../../contexts/auth";

export default function Avisos({ navigation }) {
  const [warningList, setWarningList] = useState([
    { id: 0, title: "Título 0", message: "Mensagem", visibleToParish: false },
    { id: 1, title: "Título 1", message: "Mensagem", visibleToParish: false },
    { id: 2, title: "Título 2", message: "Mensagem", visibleToParish: false },
  ]);
  const [itemClicked, setItemClicked] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [formModalDefaultVisible, setFormModalDefaultVisible] = useState(true);

  const { nome } = useContext(AuthContext);
  console.log(nome);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ScreenBase colorStatusBar={"#fff"}>
          <View style={styles.main}>
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
          </View>
        </ScreenBase>
      </View>
      {!modalVisible ? (
        <ButtonAdd
          onPress={() => {
            setModalVisible(!modalVisible);
            setFormModalDefaultVisible(true);
            setItemClicked("");
          }}
        />
      ) : (
        ""
      )}
    </View>
  );
}
