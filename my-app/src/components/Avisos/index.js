import React, { useState } from "react";
import { View } from "react-native";
import styles from "./style";
import ScreenBase from "../ScreenBase";
import ButtonAdd from "../ButtonAdd";
import ItemAvisoContent from "./ItemAvisoContent";

export default function Avisos({ navigation }) {
  const [warningList, setWarningList] = useState([
    { id: 0, title: "Título 0", message: "Mensagem" },
    { id: 1, title: "Título 1", message: "Mensagem" },
    { id: 2, title: "Título 2", message: "Mensagem" },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ScreenBase colorStatusBar={"#fff"}>
          <View style={styles.main}>
            <ItemAvisoContent warningList={warningList} />
          </View>
        </ScreenBase>
      </View>
      <ButtonAdd />
    </View>
  );
}
