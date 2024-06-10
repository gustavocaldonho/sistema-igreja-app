import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import ButtonBack from "../ButtonBack";
import BoxLinearGradient from "../ScreenBase/BoxLinearGradient";

import styles from "./style";

export default function PerfilCommunity({ navigation, route }) {
  const { patron } = route.params;
  //   const { nameUser } = route.params;
  //   const { cpf } = route.params;
  // console.log(route.params);

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
              source={require("../../images/imageprofile.jpeg")}
            />
            <View style={styles.boxIconCamera}>
              <TouchableOpacity onPress={() => {}}>
                <Icon name="camera" style={styles.iconCamera} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.boxNameUser}>
          <Text style={styles.textNameUser}>Banana Banana</Text>
          {/* <Text style={styles.textNameUser}>
          Gustavo Caldonho de Souza Magnago
        </Text> */}
        </View>
        <ScrollView>
          <View style={[styles.boxInformationsUser, styles.boxShadow]}>
            <View style={styles.line}>
              <Text style={styles.textLabel}>CPF:</Text>
              <Text style={styles.textData}>oioioio</Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textLabel}>DATA DE NASCIMENTO:</Text>
              <Text style={styles.textData}>12/09/2000</Text>
            </View>
            <View style={styles.line}>
              <Text style={[styles.textLabel, styles.textLabelEmail]}>
                EMAIL:
              </Text>
              <Text style={[styles.textData, styles.textDataEmail]}>
                nomesobrenome@gmail.com
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={[styles.textLabel, styles.textLabelComunity]}>
                COMUNIDADE:
              </Text>
              <Text style={[styles.textData, styles.textDataComunity]}>
                São Geraldo Magela - Sapucaia
              </Text>
            </View>

            <TouchableOpacity style={styles.buttonChangeDatas}>
              <Text style={styles.textChangeDatas}>ALTERAR DADOS</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </BoxLinearGradient>
    </View>
  );
}
