import React, { useState } from "react";
import { View } from "react-native";
import styles from "./style";

import ScreenBase from "../ScreenBase";
import PerfilUser from "../PerfilUser";
import BoxSearch from "../BoxSearch";
import ItemUser from "./ItemUser";

export default function Users({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <BoxSearch />
        <ScreenBase colorStatusBar={"#fff"}>
          <View style={styles.main}>
            <ItemUser nameUser={"Gustavo Caldonho"} />
            <ItemUser nameUser={"Maria José das Dores"} />
            <ItemUser nameUser={"Antônio Carlos"} />
          </View>
        </ScreenBase>
      </View>
    </View>
  );
}
