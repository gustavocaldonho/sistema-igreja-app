import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./style";

export default function PerfilUser({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{
          width: "100%",
          height: "100%",
        }}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0.1 }}
        colors={["#f094c0", "#339dd7"]}
      >
        <View style={styles.boxTop}>
          <View style={styles.boxIconLeft}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={25} style={styles.iconLeft} />
            </TouchableOpacity>
          </View>
          <View style={[styles.boxImageProfile, styles.boxShadowLight]}>
            <Image
              style={styles.imageProfile}
              source={require("../../images/imageprofile.jpeg")}
            ></Image>
          </View>
        </View>
        <View style={styles.boxNameUser}>
          <Text style={styles.textNameUser}>Gustavo Caldonho</Text>
          {/* <Text style={styles.textNameUser}>
          Gustavo Caldonho de Souza Magnago
        </Text> */}
        </View>
        <View style={[styles.boxInformationsUser, styles.boxShadow]}>
          <View style={styles.line}>
            <Text style={styles.textLabel}>CPF:</Text>
            <Text style={styles.textData}>232.454.606-90</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.textLabel}>DATA DE NASCIMENTO:</Text>
            <Text style={styles.textData}>12/09/2000</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.textLabel}>EMAIL:</Text>
            <Text style={styles.textData}>nomesobrenome@gmail.com</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.textLabel}>COMUNIDADE:</Text>
            <Text style={styles.textData}>São Geraldo - Sapucaia</Text>
          </View>

          <TouchableOpacity style={styles.buttonChangeDatas}>
            <Text style={styles.textChangeDatas}>ALTERAR DADOS</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
