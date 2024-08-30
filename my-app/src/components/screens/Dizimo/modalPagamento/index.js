import React, { useContext, useState } from "react";
import { Modal, View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import InputGroupValorDizimo from "../../../auxiliary/InputGroup/InputGroupValorDizimo";
import { AuthContext } from "../../../../contexts/auth";
import * as Notifications from "expo-notifications";
import { getCodePaymentDizimo } from "../../../../services/payment_api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ModalPagamentoDizimo({
  year,
  month,
  modalVisible,
  setModalVisible,
}) {
  const [valorDizimo, setValorDizimo] = useState("");
  const [codPix, setCodePix] = useState(null);
  const { user } = useContext(AuthContext);

  const sendNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `Olá, ${user.name}!`,
        body: "Sua chave Pix Copia e Cola já foi gerada, aguardamos seu pagamento ;)",
      },
      trigger: {
        seconds: 1,
      },
    });
  };

  async function getCode(data) {
    try {
      const token = await AsyncStorage.getItem("AccessToken");
      console.log(data);
      // const response = await getCodePaymentDizimo(data, token);

      // if (response.status === 201) {
      //   setModalVisible(false);
      // }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.boxIconClose}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
              setValorDizimo(0);
              setCodePix(null);
            }}
          >
            <Icon name="close" style={styles.iconClose} />
          </TouchableOpacity>
        </View>

        <View style={styles.modalView}>
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
                  getCode({ year, month, valorDizimo });
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
                source={require("../../../../images/qrcode.png")}
              />
              <TouchableOpacity
                style={styles.boxButtonCopyCode}
                onPress={() => {
                  // sendNotification();
                }}
              >
                <Text style={styles.textButtonCode}>Copiar Código</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
}
