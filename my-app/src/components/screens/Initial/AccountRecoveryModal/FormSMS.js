import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MaskInput from "react-native-mask-input";
import modalStyles from "./style";
import { getNewPassword } from "../../../../services/user_api";

export default function FormSMS({
  loading,
  setLoading,
  phone,
  cpfConfirmed,
  setMsgSuccessIsVisible,
  setNewPassword,
}) {
  const inputRef = useRef(null);
  const [codeSms, setCodeSms] = useState("");
  const [errorSms, setErrorSms] = useState(false);
  const [showErrorSms, setShowErrorSms] = useState(false);
  const [msgErro, setMsgErro] = useState("");

  const confirmCodeSms = async () => {
    try {
      if (codeSms.length === 4) {
        setLoading(true);
        const result = await getNewPassword(cpfConfirmed, codeSms);
        if (result.status === 200) {
          setErrorSms(false);
          setShowErrorSms(false);
          setMsgSuccessIsVisible(true);
          setNewPassword(result.data.new_password);
        } else {
          setMsgErro("Código Inválido!");
          throw new Error("Falha na requisição.");
        }
      } else {
        setMsgErro("Por favor, digite o código corretamente!");
        throw new Error("Código inválido.");
      }
    } catch (error) {
      console.log(error);
      setErrorSms(true);
      setShowErrorSms(true);
    } finally {
      setLoading(false);
    }
  };

  const formatSecretPhone = (phone) => {
    return `(${phone.substring(3, 5)})******${phone.substring(12, 14)} `;
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
        Confirme o código de verificação enviado para {formatSecretPhone(phone)}
        no campo logo abaixo:
      </Text>
      <MaskInput
        ref={inputRef}
        style={[
          modalStyles.input,
          errorSms && showErrorSms ? modalStyles.inputError : null,
        ]}
        placeholder="0000"
        placeholderTextColor={"#E0E0E0"}
        selectionColor={"#fff"}
        value={codeSms}
        keyboardType="numeric"
        maxLength={4}
        onChangeText={(text) => {
          setCodeSms(text);
          if (text.length === 4) {
            setErrorSms(false);
          }
        }}
        editable={!loading}
      />
      <Text style={modalStyles.errorText}>
        {errorSms && showErrorSms ? msgErro : ""}
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
