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
  const [showError, setShowError] = useState(false);

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

  const formatMoney = (value) => {
    let newValue = "";
    // console.log(value);

    switch (value.lenght) {
      case 1:
        newValue = "0,0" + value;
      case 2:
        newValue = "0," + value;
      case 3:
        newValue = value.slice(0, 1) + "," + value.slice(1, value.lenght);
    }

    setValorDizimo(value);
    return newValue;
  };

  function sendData() {
    if (!errorValue(valorDizimo)) {
      getCode({
        year: parseInt(year),
        month,
        value: parseInt(valorDizimo),
      });
    } else {
      setShowError(true);
    }
  }

  function errorValue(value) {
    return value >= 1 ? false : true;
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
          {codePix == null ? (
            <View>
              <Text style={styles.modalText}>Qual Valor?</Text>
              <InputGroupValorDizimo
                placeholder="0,00"
                value={valorDizimo}
                // onChangeText={(text) => formatMoney(text)}
                onChangeText={(text) => setValorDizimo(text)}
                style={
                  errorValue(valorDizimo) && showError ? styles.inputError : ""
                }
              />
              <Text style={styles.errorMessage}>
                {errorValue(valorDizimo) && showError
                  ? "Digite um valor válido!"
                  : ""}
              </Text>
              <TouchableOpacity
                style={styles.boxButtonPix}
                onPress={() => {
                  sendData();
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
