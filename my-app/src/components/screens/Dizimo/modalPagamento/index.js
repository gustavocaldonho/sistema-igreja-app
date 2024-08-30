import React, { useContext, useState } from "react";
import { Modal, View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import InputGroupValorDizimo from "../../../auxiliary/InputGroup/InputGroupValorDizimo";
import { AuthContext } from "../../../../contexts/auth";
import * as Notifications from "expo-notifications";
import * as Clipboard from "expo-clipboard";
import { getCodePaymentDizimo } from "../../../../services/payment_api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ModalPagamentoDizimo({
  year,
  month,
  modalVisible,
  setModalVisible,
}) {
  const [valorDizimo, setValorDizimo] = useState("");
  const [codePix, setCodePix] = useState(null);
  const [linkQrCode, setLinkQrCode] = useState(null);
  const [labelCopyCode, setLabelCopyCode] = useState("Copiar Código");
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
      console.log(data);
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await getCodePaymentDizimo(data, token);
      if (response.status === 201) {
        setCodePix(response.data.brCode);
        setLinkQrCode(response.data.qrCodeImage);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const copyCode = async () => {
    await Clipboard.setStringAsync(codePix);
    setLabelCopyCode("Copiado!");
  };

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
          {codePix == null ? (
            <View>
              <Text style={styles.modalText}>Qual Valor?</Text>
              <InputGroupValorDizimo
                placeholder="10 (10 reais)"
                value={valorDizimo}
                onChangeText={(text) => setValorDizimo(text)}
              />
              <Text style={styles.errorMessage}></Text>
              <TouchableOpacity
                style={styles.boxButtonPix}
                onPress={() => {
                  getCode({
                    year: parseInt(year),
                    month,
                    value: parseInt(valorDizimo),
                  });
                }}
              >
                <Text style={styles.textButtonPix}>Gerar Pix</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text style={styles.modalText}>Código Pix</Text>
              <Text style={styles.modalText}>LINK QR CODE: {linkQrCode}</Text>
              <Image
                style={styles.qrcode}
                // source={require("../../../../images/qrcode.png")}
                source={{ uri: linkQrCode }}
              />
              <TouchableOpacity
                style={styles.boxButtonCopyCode}
                activeOpacity={0.7}
                onPress={() => {
                  // console.log(codePix);
                  // console.log(linkQrCode);
                  copyCode();
                }}
              >
                <Text style={styles.textButtonCode}>{labelCopyCode}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
}
