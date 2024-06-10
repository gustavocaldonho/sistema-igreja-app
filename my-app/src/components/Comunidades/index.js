import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

import ScreenBase from "../ScreenBase";
import ButtonAdd from "../ButtonAdd";
import BoxSearch from "../BoxSearch";
import ItemCommunity from "./ItemCommunity";

export default function Comunidades(props) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <BoxSearch />
        <ScreenBase colorStatusBar={"#fff"}>
          <View style={styles.main}>
            <ItemCommunity
              patron={"São Geraldo Magela"}
              location={"Sapucaia"}
              navigation={props.navigation}
            />
            <ItemCommunity
              patron={"Nossa Senhora das Graças"}
              location={"Paul de Graça Aranha"}
              navigation={props.navigation}
            />
            <ItemCommunity
              patron={"Nossa Senhora Auxiliadora"}
              location={"Marilândia-ES"}
              navigation={props.navigation}
            />
          </View>
        </ScreenBase>
        <ButtonAdd />
      </View>
    </View>
  );
}
