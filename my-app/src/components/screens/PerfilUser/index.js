import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import ButtonBack from "../../auxiliary/ButtonBack";
import BoxLinearGradient from "../../pages/PageBase/BoxLinearGradient";
import styles from "./style";
import PersonalDataContainer from "./PersonalDataContainer";
import DizimoContainer from "./DizimoContainer";
import MortuaryContainer from "./MortuaryContainer";
import ModalUpdateDatasUser from "./PersonalDataContainer/ModalUpdateDatasUser";

export default function PerfilUser({ navigation, route }) {
  const { name, cpf, dataNasc, email, community } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar color="#339DD7" />

      {modalVisible ? (
        <ModalUpdateDatasUser
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          user={{ name, cpf, dataNasc, email, community }}
        />
      ) : (
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
              sentUser={{ name, cpf, dataNasc, email, community }}
              style={[styles.boxInformationsUser, styles.boxShadow]}
              setModalVisible={setModalVisible}
            />

            <DizimoContainer
              months={{}}
              style={[styles.boxInformationsUser, styles.boxShadow]}
              styleTitleBox={styles.textTitleBox}
            />

            <MortuaryContainer
              years={{}}
              style={[styles.boxInformationsUser, styles.boxShadow]}
              styleTitleBox={styles.textTitleBox}
            />

            <TouchableOpacity style={styles.buttonDisable}>
              <Text style={styles.textDisable}>DESATIVAR CONTA</Text>
            </TouchableOpacity>
          </ScrollView>
        </BoxLinearGradient>
      )}
    </View>
  );
}
