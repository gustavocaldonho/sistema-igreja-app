import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MaskInput from "react-native-mask-input";
import modalStyles from "./style";

export default function FormCpf({ loading, setLoading }) {
  const [cpf, setCpf] = useState("");
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
    if (cpf.length === 14) {
      console.log("Código de verificação enviado para o CPF:", cpf);
      setErrorCpf(false);
      setShowErrorCpf(false);
      setLoading(true);
    } else {
      setErrorCpf(true);
      setShowErrorCpf(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!cpf && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 200);
    }
  }, []);

  return (
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
        value={cpf}
        keyboardType="numeric"
        maxLength={14}
        onChangeText={(text) => {
          setCpf(text);
          if (text.length === 14) {
            setErrorCpf(false);
          }
        }}
        mask={CPF_MASK}
        editable={!loading}
      />
      <Text style={modalStyles.errorText}>
        {errorCpf && showErrorCpf
          ? "Por favor, informe seu CPF corretamente!"
          : ""}
      </Text>
      <TouchableOpacity
        style={[modalStyles.button, loading ? modalStyles.inputDisable : ""]}
        onPress={requestVerificationCode}
        activeOpacity={0.6}
        disabled={loading}
      >
        <Text style={[modalStyles.buttonText, modalStyles.textConfirm]}>
          Solicitar Código
        </Text>
      </TouchableOpacity>
    </View>
  );
}
