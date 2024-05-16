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
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import InputGroupValorDizimo from "../InputGroup/InputGroupValorDizimo";

export default function Dizimo({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [valorDizimo, setValorDizimo] = useState("");
  const [codPix, setCodePix] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.main}>
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={styles.buttonClose}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setValorDizimo(0);
                  setCodePix(null);
                }}
              >
                <Text style={styles.textStyle}>
                  <Icon name="close" size={25} color="red" />
                </Text>
              </Pressable>
              {codPix == null ? (
                <View>
                  <Text style={styles.modalText}>Qual Valor?</Text>
                  <InputGroupValorDizimo
                    placeholder="10 (10 reais)"
                    value={valorDizimo}
                    onChangeText={setValorDizimo}
                  />
                  <Text style={styles.errorMessage}></Text>
                  <TouchableOpacity
                    style={styles.boxButtonPix}
                    onPress={() => {
                      setCodePix(10);
                    }}
                  >
                    <Text style={styles.textButtonPix}>Gerar Pix</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                  <Text style={styles.modalText}>Código Pix</Text>
                  <Image
                    style={styles.qrcode}
                    source={require("../../images/qrcode.png")}
                  />
                  <TouchableOpacity
                    style={styles.boxButtonCopyCode}
                    onPress={() => {
                      setCodePix(null);
                    }}
                  >
                    <Text style={styles.textButtonCode}>Copiar Código</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </Modal>

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
    </View>
  );
}
