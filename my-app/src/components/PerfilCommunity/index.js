import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import ButtonBack from "../ButtonBack";
import BoxLinearGradient from "../ScreenBase/BoxLinearGradient";

import styles from "./style";

export default function PerfilCommunity({ navigation, route }) {
  const { patron } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar color="#339DD7" />
      <BoxLinearGradient style={{ flex: 1 }}>
        <View style={styles.boxButtonBack}>
          <ButtonBack navigation={navigation} color={"#fff"} />
        </View>
        <View style={styles.boxTop}>
          <View style={[styles.boxImageProfile, styles.boxShadowLight]}>
            <Image
              style={styles.imageProfile}
              source={require("../../images/church-icon.png")}
            />
            <View style={styles.boxIconCamera}>
              <TouchableOpacity onPress={() => {}}>
                <Icon name="camera" style={styles.iconCamera} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.boxNamePatron}>
          <Text style={styles.textNamePatron}>{patron}</Text>
          <Text style={styles.textLocation}>Sapucaia</Text>
        </View>
        <ScrollView>
          {/* <View style={[styles.boxInformations, styles.boxShadow]}></View> */}
        </ScrollView>
      </BoxLinearGradient>
    </View>
  );
}
