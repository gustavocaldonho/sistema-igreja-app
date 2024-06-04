import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";

import ScreenBase from "../ScreenBase";
import PerfilUser from "../PerfilUser";
import BoxSearch from "../BoxSearch";

export default function Users({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <BoxSearch />
        <ScreenBase colorStatusBar={"#fff"}>
          <View style={styles.main}>
            <Pressable>
              <View style={styles.boxItem}>
                <View style={styles.boxIconLeft}>
                  <Icon name="user" style={styles.iconUser} />
                </View>
                <View style={styles.boxName}>
                  <Text style={styles.textName}>Gustavo Caldonho</Text>
                </View>
                <View style={styles.boxIconRight}>
                  <Icon name="chevron-right" style={styles.iconRight} />
                </View>
              </View>
            </Pressable>
          </View>
        </ScreenBase>
      </View>
    </View>
  );
}
