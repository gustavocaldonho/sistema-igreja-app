import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import modalStyles from "./style";

export default function PasswordRecoveryModal({ isVisible, onClose }) {
  const [modalCpf, setModalCpf] = useState("");

  const requestVerificationCode = () => {
    if (modalCpf) {
      // Código para solicitar o envio do SMS com base no CPF informado.
      console.log("Código de verificação enviado para o CPF:", modalCpf);
      onClose(); // Fecha o modal após solicitar o código
    } else {
      Alert.alert("Erro", "Por favor, informe seu CPF.");
    }
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={modalStyles.modalContainer}>
        <View style={modalStyles.modalContent}>
          <Text style={modalStyles.modalText}>
            Insira seu CPF para receber um código de verificação via SMS.
          </Text>
          <TextInput
            style={modalStyles.input}
            placeholder="000.000.000-00"
            value={modalCpf}
            onChangeText={setModalCpf}
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={modalStyles.button}
            onPress={requestVerificationCode}
          >
            <Text style={modalStyles.buttonText}>Solicitar Código</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[modalStyles.button, modalStyles.cancelButton]}
            onPress={onClose}
          >
            <Text style={modalStyles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
