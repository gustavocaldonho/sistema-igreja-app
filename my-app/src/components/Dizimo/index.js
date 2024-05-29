import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
// import Icon from "react-native-vector-icons/FontAwesome";
// import InputGroupValorDizimo from "../InputGroup/InputGroupValorDizimo";
import ModalPagamentoDizimo from "./modalPagamento/";

export default function Dizimo({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <LinearGradient
        style={{
          width: "100%",
          height: "100%",
        }}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0.1 }}
        colors={["#f094c0", "#339dd7"]}
      >
        <ScrollView style={styles.main}>
          {modalVisible ? (
            <ModalPagamentoDizimo
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          ) : (
            <View />
          )}

          <View style={styles.boxItem}>
            <View style={styles.boxTop}>
              <View style={styles.boxMonth}>
                <Text style={styles.textMonth}>MAIO</Text>
              </View>
              <View style={styles.boxPayButton}>
                <TouchableOpacity
                  style={styles.payButton}
                  onPress={() => setModalVisible(true)}
                >
                  <Text style={styles.textPayButton}>Pagar</Text>
                </TouchableOpacity>
                {/* <View style={styles.boxIconCheck}>
                <Icon name="check" color={"#fff"} size={20} />
              </View> */}
              </View>
            </View>
            <View style={styles.boxBottom}>
              <View style={styles.boxObs}>
                <Text style={styles.textObs}>Será Liberado em 01/05/2024</Text>
              </View>
              <View style={styles.boxStatus}>
                <Text style={styles.textStatus}>Status</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
