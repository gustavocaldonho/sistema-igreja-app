import React, { useState, useRef, useEffect } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import modalStyles from "./style";
import BoxLinearGradient from "../../PageBase/BoxLinearGradient";
import MaskInput from "react-native-mask-input";

export default function AccountRecoveryModal({ isVisible, onClose }) {
  const [modalCpf, setModalCpf] = useState("");
  const [errorCpf, setErrorCpf] = useState(false);
  const [showErrorCpf, setShowErrorCpf] = useState(false);
  const inputRef = useRef(null);

  const CPF_MASK = [
    /\d/,
    /\d/,
    /\d/,
    ".",
    /\d/,
    /\d/,
    /\d/,
    ".",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
  ];

  const requestVerificationCode = () => {
    if (modalCpf.length === 14) {
      console.log("Código de verificação enviado para o CPF:", modalCpf);
      setErrorCpf(false);
      setShowErrorCpf(false);
      onClose();
    } else {
      setErrorCpf(true);
      setShowErrorCpf(true);
    }
  };

  const cancel = () => {
    onClose();
    setModalCpf("");
    setErrorCpf(false);
    setShowErrorCpf(false);
  };

  useEffect(() => {
    if (isVisible && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 200);
    }
  }, [isVisible]);

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <BoxLinearGradient style={modalStyles.modalContainer}>
        <View style={modalStyles.modalContent}>
          <Text style={modalStyles.modalText}>
            Confirme seu CPF para receber um código de verificação via SMS.
          </Text>
          <MaskInput
            ref={inputRef}
            style={[
              modalStyles.input,
              errorCpf && showErrorCpf ? modalStyles.inputError : null,
            ]}
            placeholder="000.000.000-00"
            placeholderTextColor={"#E0E0E0"}
            selectionColor={"#fff"}
            value={modalCpf}
            keyboardType="numeric"
            maxLength={14}
            onChangeText={(text) => {
              setModalCpf(text);
              if (text.length === 14) {
                setErrorCpf(false);
              }
            }}
            mask={CPF_MASK}
          />
          <Text style={modalStyles.errorText}>
            {errorCpf && showErrorCpf
              ? "Por favor, informe seu CPF corretamente!"
              : ""}
          </Text>
          <TouchableOpacity
            style={modalStyles.button}
            onPress={requestVerificationCode}
            activeOpacity={0.6}
          >
            <Text style={[modalStyles.buttonText, modalStyles.textConfirm]}>
              Solicitar Código
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={modalStyles.button}
            onPress={cancel}
            activeOpacity={0.6}
          >
            <Text style={[modalStyles.buttonText, modalStyles.textCancel]}>
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
      </BoxLinearGradient>
    </Modal>
  );
}
