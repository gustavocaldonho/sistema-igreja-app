import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import ButtonBack from "../ButtonBack";
import BoxLinearGradient from "../ScreenBase/BoxLinearGradient";

import styles from "./style";

export default function PerfilCommunity({ navigation, route }) {
  const { patron } = route.params;
  const { location } = route.params;

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
          <Text style={styles.textLocation}>{location}</Text>
        </View>
        <ScrollView>
          <View
            style={[styles.boxInformations, styles.boxHighlightInformations]}
          >
            <View style={styles.itemHighlightInformation}>
              <Text style={styles.numberHighlight}>647</Text>
              <Text style={styles.textHighlight}>Fiéis</Text>
            </View>
            <View style={styles.itemHighlightInformation}>
              <Text style={styles.numberHighlight}>470</Text>
              <Text style={styles.textHighlight}>Pagantes</Text>
            </View>
            <View style={styles.itemHighlightInformation}>
              <Text style={styles.numberHighlight}>3.460,00</Text>
              <Text style={styles.textHighlight}>Dízimo</Text>
            </View>
            <View style={styles.itemHighlightInformation}>
              <Text style={styles.numberHighlight}>23.500,00</Text>
              <Text style={styles.textHighlight}>Caixa Mortuária</Text>
            </View>
          </View>
          <View style={[styles.boxInformations]}>
            <Text style={styles.titleBoxAdvidors}>MEMBROS DO CONSELHO</Text>

            {/* ícone de edição e exclusão dos conselheiros */}
            {/* botão de adição de novos conselheiros */}
            {/* "Componentizar" os itens abaixo */}
            <View style={styles.itemAdvisor}>
              <Text style={styles.textNameAdvisor}>Elizabeth Suann</Text>
              <Text style={styles.positionAdvisor}>Diretor Geral</Text>
            </View>
            <View style={styles.itemAdvisor}>
              <Text style={styles.textNameAdvisor}>
                Marcos Antônio da Silva
              </Text>
              <Text style={styles.positionAdvisor}>Tesoureiro</Text>
            </View>
            <View style={styles.itemAdvisor}>
              <Text style={styles.textNameAdvisor}>Rubinho Barrichelo</Text>
              <Text style={styles.positionAdvisor}>Liturgia</Text>
            </View>
            <View style={styles.itemAdvisor}>
              <Text style={styles.textNameAdvisor}>
                Estevão Soares de Souza
              </Text>
              <Text style={styles.positionAdvisor}>Catecismo</Text>
            </View>
            <View style={styles.itemAdvisor}>
              <Text style={styles.textNameAdvisor}>Milena Gomes Araújo</Text>
              <Text style={styles.positionAdvisor}>Cemitério</Text>
            </View>
          </View>
        </ScrollView>
      </BoxLinearGradient>
    </View>
  );
}
