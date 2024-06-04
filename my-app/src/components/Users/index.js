import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";

import ScreenBase from "../ScreenBase";

export default function Users({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ScreenBase colorStatusBar={"#fff"}>
          <View style={styles.main}>
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
          </View>
        </ScreenBase>
      </View>
    </View>
  );
}
