import React, { useContext, useEffect, useState, useRef } from "react";
import { Modal, View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import InputGroupValorDizimo from "../../../auxiliary/InputGroup/InputGroupValorDizimo";
import { AuthContext } from "../../../../contexts/auth";
import * as Notifications from "expo-notifications";
import * as Clipboard from "expo-clipboard";
import { getCodePaymentDizimo } from "../../../../services/payment_api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoadingIndicator from "../../../auxiliary/LoadingIndicator";

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
  const [visibleIndicator, setVisibleIndicator] = useState(false);
  const inputRef = useRef(null);

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
      setVisibleIndicator(true);
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await getCodePaymentDizimo(data, token);
      if (response.status === 201) {
        setCodePix(response.data.brCode);
        setLinkQrCode(response.data.qrCodeImage);
      } else {
        console.log(response);
      }
      setVisibleIndicator(false);
    } catch (error) {
      console.log(error);
    }
  }

  const copyCode = async () => {
    await Clipboard.setStringAsync(codePix);
    setLabelCopyCode("Copiado!");
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
    const numericValue = value.replace(/\./g, "").replace(",", ".");
    const number = parseFloat(numericValue);
    return isNaN(number) || number < 1;
  }

  useEffect(() => {
    if (modalVisible && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 200);
    }
  }, [modalVisible]);

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
              setValorDizimo("");
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
                ref={inputRef}
                placeholder="0,00"
                value={valorDizimo}
                onChangeText={(text) => {
                  setValorDizimo(text);
                }}
                style={
                  errorValue(valorDizimo) && showError ? styles.inputError : ""
                }
              />
              <Text style={styles.errorMessage}>
                {errorValue(valorDizimo) && showError
                  ? "Digite um valor válido!"
                  : ""}
              </Text>

              {visibleIndicator ? (
                <LoadingIndicator color="#339dd7" />
              ) : (
                <TouchableOpacity
                  style={styles.boxButtonPix}
                  onPress={() => {
                    sendData();
                  }}
                >
                  <Text style={styles.textButtonPix}>Gerar Pix</Text>
                </TouchableOpacity>
              )}
            </View>
          ) : (
            <View>
              <Text style={styles.modalText}>Código Pix</Text>
              {linkQrCode ? (
                <Image
                  style={styles.qrcode}
                  source={{ uri: linkQrCode }}
                  alt="qr-code.png"
                />
              ) : (
                <Text style={styles.modalText}>QR Code indisponível</Text>
              )}
              <TouchableOpacity
                style={styles.boxButtonCopyCode}
                activeOpacity={0.7}
                onPress={() => {
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
