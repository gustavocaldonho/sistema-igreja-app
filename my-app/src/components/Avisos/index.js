import React, { useState } from "react";
import { View } from "react-native";
import styles from "./style";
import ScreenBase from "../ScreenBase";
import ButtonAdd from "../ButtonAdd";
import ItemAvisoContent from "./ItemAvisoContent";
import ModalWarning from "./ModalWarning";

export default function Avisos({ navigation }) {
  const [warningList, setWarningList] = useState([
    { id: 0, title: "Título 0", message: "Mensagem" },
    { id: 1, title: "Título 1", message: "Mensagem" },
    { id: 2, title: "Título 2", message: "Mensagem" },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemClicked, setItemClicked] = useState({});

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ScreenBase colorStatusBar={"#fff"}>
          <View style={styles.main}>
            {modalVisible ? (
              <ModalWarning
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                warningList={warningList}
                setWarningList={setWarningList}
                itemClicked={itemClicked}
                setItemClicked={setItemClicked}
              />
            ) : (
              <ItemAvisoContent
                warningList={warningList}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setItemClicked={setItemClicked}
              />
            )}
          </View>
        </ScreenBase>
      </View>
      {!modalVisible ? (
        <ButtonAdd
          onPress={() => {
            setModalVisible(!modalVisible);
            // console.log(warningList);
          }}
        />
      ) : (
        ""
      )}
    </View>
  );
}
