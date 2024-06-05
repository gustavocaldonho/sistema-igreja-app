import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

import ScreenBase from "../ScreenBase";
import BoxSearch from "../BoxSearch";
import ItemCommunity from "./ItemCommunity";

export default function Comunidades({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <BoxSearch />
        <ScreenBase colorStatusBar={"#fff"}>
          <View style={styles.main}>
            <ItemCommunity nameCommunity={"São Geraldo"} />
            <ItemCommunity nameCommunity={"Santo Antônio"} />
            <ItemCommunity nameCommunity={"Nossa Senhora das Graças"} />
          </View>
        </ScreenBase>
      </View>
    </View>
  );
}
