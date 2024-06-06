import React, { useState } from "react";
import { View } from "react-native";
import styles from "./style";

import ScreenBase from "../ScreenBase";
import BoxSearch from "../BoxSearch";
import ItemUser from "./ItemUser";

export default function Users(props) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <BoxSearch />
        <ScreenBase colorStatusBar={"#fff"}>
          <View style={styles.main}>
            <ItemUser
              nameUser={"Fábio Antonio Astori"}
              cpf={"000.000.000-00"}
              navigation={props.navigation}
            />
            <ItemUser
              nameUser={"Gustavo Caldonho"}
              cpf={"111.111.111-11"}
              navigation={props.navigation}
            />
            <ItemUser
              nameUser={"Maria José das Dores"}
              cpf={"222.222.222-22"}
              navigation={props.navigation}
            />
            <ItemUser
              nameUser={"Antônio Carlos"}
              cpf={"333.333.333-33"}
              navigation={props.navigation}
            />
          </View>
        </ScreenBase>
      </View>
    </View>
  );
}
