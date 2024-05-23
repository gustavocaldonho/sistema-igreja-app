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
import Icon from "react-native-vector-icons/FontAwesome";

export default function CaixaMortuaria({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [valorCaixaMortuaria, setValorCaixaMortuaria] = useState("");
  const [codPix, setCodePix] = useState(null);

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
          <View style={styles.boxItem}>
            <View style={styles.boxTop}>
              <View style={styles.boxStatus}>
                <Text style={styles.textStatus}>Aguardando Pagamento</Text>
              </View>
              <View style={styles.boxYear}>
                <Text style={styles.textYear}>2024</Text>
              </View>
            </View>
            <View style={styles.boxMiddle}>
              <Text style={styles.textValue}>R$ 50,00</Text>
            </View>
            <View style={styles.boxBottom}>
              <View style={styles.boxObs}>
                <Text style={styles.textObs}>Vencimento em 30/09/2024</Text>
              </View>
              <View style={styles.boxPayButton}>
                <TouchableOpacity style={styles.payButton}>
                  <Text style={styles.textPayButton}>Copiar Código</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
