import React, { useContext } from "react";
import { View } from "react-native";
import styles from "./style";

import ScreenBase from "../ScreenBase";
import BoxSearch from "../BoxSearch";
import ItemUserContent from "./ItemUserContent";
import { AuthContext } from "../../contexts/auth";

export default function Users({ navigation }) {
  const { userList } = useContext(AuthContext);

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
