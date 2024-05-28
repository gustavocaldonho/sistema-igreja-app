import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
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
        <View style={styles.boxIconLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" style={styles.iconLeft} />
          </TouchableOpacity>
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
          <Text style={styles.textNameUser}>Gustavo Caldonho</Text>
          {/* <Text style={styles.textNameUser}>
          Gustavo Caldonho de Souza Magnago
        </Text> */}
        </View>
        <ScrollView>
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
          <View style={[styles.boxInformationsUser, styles.boxShadow]}>
            <Text style={styles.textTitleBox}>DÍZIMO</Text>
            <View style={styles.boxLineListDizimo}>
              <View style={styles.itemLineList}>
                <Text style={styles.textMonth}>JAN</Text>
                <Icon name="heart" style={styles.iconStatusMonth} />
              </View>
              <View style={styles.itemLineList}>
                <Text style={styles.textMonth}>FEV</Text>
                <Icon name="heart" style={styles.iconStatusMonth} />
              </View>
              <View style={styles.itemLineList}>
                <Text style={styles.textMonth}>MAR</Text>
                <Icon name="heart" style={styles.iconStatusMonth} />
              </View>
              <View style={styles.itemLineList}>
                <Text style={styles.textMonth}>ABR</Text>
                <Icon name="remove" style={styles.iconStatusMonth} />
              </View>
            </View>
            <View style={styles.boxLineListDizimo}>
              <View style={styles.itemLineList}>
                <Text style={styles.textMonth}>MAI</Text>
                <Icon name="remove" style={styles.iconStatusMonth} />
              </View>
              <View style={[styles.itemLineList, styles.currentMonth]}>
                <Text style={styles.textMonth}>JUN</Text>
                <Icon name="exclamation" style={styles.iconStatusMonth} />
              </View>
              <View style={[styles.itemLineList, styles.blockedMonth]}>
                <Text style={styles.textMonth}>JUL</Text>
                <Icon name="minus" style={styles.iconStatusMonth} />
              </View>
              <View style={[styles.itemLineList, styles.blockedMonth]}>
                <Text style={styles.textMonth}>AGO</Text>
                <Icon name="minus" style={styles.iconStatusMonth} />
              </View>
            </View>
            <View style={styles.boxLineListDizimo}>
              <View style={[styles.itemLineList, styles.blockedMonth]}>
                <Text style={styles.textMonth}>SET</Text>
                <Icon name="minus" style={styles.iconStatusMonth} />
              </View>
              <View style={[styles.itemLineList, styles.blockedMonth]}>
                <Text style={styles.textMonth}>OUT</Text>
                <Icon name="minus" style={styles.iconStatusMonth} />
              </View>
              <View style={[styles.itemLineList, styles.blockedMonth]}>
                <Text style={styles.textMonth}>NOV</Text>
                <Icon name="minus" style={styles.iconStatusMonth} />
              </View>
              <View style={[styles.itemLineList, styles.blockedMonth]}>
                <Text style={styles.textMonth}>DEZ</Text>
                <Icon name="minus" style={styles.iconStatusMonth} />
              </View>
            </View>
          </View>
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
      </LinearGradient>
    </View>
  );
}
