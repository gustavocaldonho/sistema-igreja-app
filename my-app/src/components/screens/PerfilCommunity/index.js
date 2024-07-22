import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import ButtonBack from "../../auxiliary/ButtonBack";
import BoxLinearGradient from "../../screens/PageBase/BoxLinearGradient";
import ItemAdvisor from "./ItemAdvisor";
import ItemHighlight from "./ItemHighlight";
import ModalCommunity from "../Comunidades/ModalCommunity";

import styles from "./style";

export default function PerfilCommunity({ navigation, route }) {
  const { id, patron, location } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#339DD7" />

      <BoxLinearGradient style={{ flex: 1 }}>
        {modalVisible ? (
          <ModalCommunity
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            community={{ id, patron, location }}
          />
        ) : (
          <View style={{ flex: 1 }}>
            <View style={styles.boxButtonBack}>
              <ButtonBack color={"#fff"} />
            </View>
            <View style={styles.boxTop}>
              <View style={[styles.boxImageProfile, styles.boxShadowLight]}>
                <Image
                  style={styles.imageProfile}
                  source={require("../../../images/church-icon.png")}
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
              <Text style={styles.textLocation}>{location}</Text>
              <TouchableOpacity
                style={styles.buttonChangeDatas}
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <Text style={styles.textChangeDatas}>ALTERAR DADOS</Text>
              </TouchableOpacity>
            </View>
            <ScrollView>
              <View
                style={[
                  styles.boxInformations,
                  styles.boxHighlightInformations,
                ]}
              >
                <ItemHighlight
                  style={styles.boxShadow}
                  number={647}
                  label={"Fiéis"}
                />
                <ItemHighlight
                  style={styles.boxShadow}
                  number={470}
                  label={"Pagantes"}
                />
                <ItemHighlight
                  style={styles.boxShadow}
                  number={"3.460,00"}
                  label={"Dízimo"}
                />
                <ItemHighlight
                  style={styles.boxShadow}
                  number={"23.500,00"}
                  label={"Caixa Mortuária"}
                />
              </View>
              <View style={[styles.boxInformations]}>
                <Text style={styles.titleBoxAdvidors}>MEMBROS DO CONSELHO</Text>
                <ItemAdvisor
                  style={styles.boxShadow}
                  name={"Elizabeth Suann"}
                  position={"Diretor Geral"}
                />
                <ItemAdvisor
                  style={styles.boxShadow}
                  name={"Marcos Antônio da Silva"}
                  position={"Tesoureiro"}
                />
                <ItemAdvisor
                  style={styles.boxShadow}
                  name={"Estevão Soares de Souza"}
                  position={"Catecismo"}
                />
                <ItemAdvisor
                  style={styles.boxShadow}
                  name={"Milena Gomes Araújo"}
                  position={"Cemitério"}
                />
                <TouchableOpacity style={styles.boxAddMembro}>
                  <Icon name="plus" style={styles.iconPlusMembro} />
                  <Text style={styles.textAddMembro}>ADICIONAR MEMBRO</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        )}
      </BoxLinearGradient>
    </View>
  );
}
