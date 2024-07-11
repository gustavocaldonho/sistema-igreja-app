import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import ButtonBack from "../../auxiliary/ButtonBack";
import BoxLinearGradient from "../../pages/PageBase/BoxLinearGradient";
import styles from "./style";
import PersonalDataContainer from "./PersonalDataContainer";
import DizimoContainer from "./DizimoContainer";

export default function PerfilUser({ navigation, route }) {
  const { name, cpf, dataNasc, email, community } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar color="#339DD7" />
      <BoxLinearGradient style={{ flex: 1 }}>
        <View style={styles.boxButtonBack}>
          <ButtonBack color={"#fff"} />
        </View>
        <View style={styles.boxTop}>
          <View style={[styles.boxImageProfile, styles.boxShadowLight]}>
            <Image
              style={styles.imageProfile}
              source={require("../../../images/img-perfil-user.png")}
            />
            <View style={styles.boxIconCamera}>
              <TouchableOpacity onPress={() => {}}>
                <Icon name="camera" style={styles.iconCamera} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.boxNameUser}>
          <Text style={styles.textNameUser}>{name}</Text>
        </View>

        <ScrollView>
          <PersonalDataContainer
            user={{ name, cpf, dataNasc, email, community }}
            style={[styles.boxInformationsUser, styles.boxShadow]}
          />

          <DizimoContainer
            months={{}}
            style={[styles.boxInformationsUser, styles.boxShadow]}
            styleTitleBox={styles.textTitleBox}
          />

          <View style={[styles.boxInformationsUser, styles.boxShadow]}>
            <Text style={styles.textTitleBox}>CAIXA MORTUÁRIA</Text>
            <View style={styles.boxLineListMortuary}>
              <View style={styles.itemLineList}>
                <Text style={styles.textYear}>2023</Text>
                <Icon name="heart" style={styles.iconStatusMonth} />
              </View>
              <View style={[styles.itemLineList, styles.currentYear]}>
                <Text style={styles.textYear}>2024</Text>
                <Icon name="heart" style={styles.iconStatusMonth} />
              </View>
            </View>
          </View>
        </ScrollView>
      </BoxLinearGradient>
    </View>
  );
}
