import React, { useState } from "react";
import { View } from "react-native";
import styles from "./style";

import ScreenBase from "../ScreenBase";
import BoxSearch from "../BoxSearch";
import ItemUserContent from "./ItemUserContent";

export default function Users({ navigation, route }) {
  const { userList } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <BoxSearch />
        <ScreenBase colorStatusBar={"#fff"}>
          <View style={styles.main}>
            <ItemUserContent navigation={navigation} userList={userList} />
          </View>
        </ScreenBase>
      </View>
    </View>
  );
}
