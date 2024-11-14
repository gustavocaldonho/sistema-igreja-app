import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MaskInput from "react-native-mask-input";
import modalStyles from "./style";

export default function FormSMS({ loading, setLoading }) {
  const inputRef = useRef(null);
  const [codeSms, setCodeSms] = useState("");
  const [errorSms, setErrorSms] = useState(false);
  const [showErrorSms, setShowErrorSms] = useState(false);

  const confirmCodeSms = () => {
    if (codeSms.length === 6) {
      console.log("Código de verificação sendo confirmado:", codeSms);
      setErrorSms(false);
      setShowErrorSms(false);
      setLoading(true);
    } else {
      setErrorSms(true);
      setShowErrorSms(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!codeSms && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 200);
    }
  }, []);

  return (
    <View style={modalStyles.modalContent}>
      <Text style={modalStyles.modalText}>
        Digite o código de verificação enviado via SMS para (27) *****2467.
      </Text>
      <MaskInput
        ref={inputRef}
        style={[
          modalStyles.input,
          errorSms && showErrorSms ? modalStyles.inputError : null,
        ]}
        placeholder="000000"
        placeholderTextColor={"#E0E0E0"}
        selectionColor={"#fff"}
        value={codeSms}
        keyboardType="numeric"
        maxLength={6}
        onChangeText={(text) => {
          setCodeSms(text);
          if (text.length === 6) {
            setErrorSms(false);
          }
        }}
        editable={!loading}
      />
      <Text style={modalStyles.errorText}>
        {errorSms && showErrorSms ? "Código SMS incorreto!" : ""}
      </Text>
      <TouchableOpacity
        style={[modalStyles.button, loading ? modalStyles.inputDisable : ""]}
        onPress={confirmCodeSms}
        activeOpacity={0.6}
        disabled={loading}
      >
        <Text style={[modalStyles.buttonText, modalStyles.textConfirm]}>
          Confirmar Código
        </Text>
      </TouchableOpacity>
    </View>
  );
}
