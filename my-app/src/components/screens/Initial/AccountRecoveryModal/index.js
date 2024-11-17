import React, { useState } from "react";
import { Text, Modal, TouchableOpacity } from "react-native";
import modalStyles from "./style";
import BoxLinearGradient from "../../PageBase/BoxLinearGradient";
import LoadingIndicator from "../../../auxiliary/LoadingIndicator";
import FormCpf from "./FormCpf";
import FormSMS from "./FormSMS";
import FormNewPassword from "./FormNewPassword";

export default function AccountRecoveryModal({ isVisible, onClose }) {
  const [loading, setLoading] = useState(false);
  const [isVisibleFormCpf, setIsVisibleFormCpf] = useState(true);
  const [phone, setPhone] = useState("");
  const [cpfConfirmed, setCpfConfirmed] = useState("");
  const [msgSuccessIsVisible, setMsgSuccessIsVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("Se0203##");

  const cancel = () => {
    onClose();
    setLoading(false);
    setIsVisibleFormCpf(true);
    setMsgSuccessIsVisible(false);
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <BoxLinearGradient style={modalStyles.modalContainer}>
        {!msgSuccessIsVisible ? (
          <>
            {isVisibleFormCpf ? (
              <FormCpf
                loading={loading}
                setLoading={setLoading}
                setIsVisibleFormCpf={setIsVisibleFormCpf}
                setPhone={setPhone}
                setCpfConfirmed={setCpfConfirmed}
              />
            ) : (
              <FormSMS
                loading={loading}
                setLoading={setLoading}
                phone={phone}
                cpfConfirmed={cpfConfirmed}
                setMsgSuccessIsVisible={setMsgSuccessIsVisible}
                setNewPassword={setNewPassword}
              />
            )}
            <TouchableOpacity
              style={modalStyles.button}
              onPress={cancel}
              activeOpacity={0.6}
            >
              <Text style={[modalStyles.buttonText, modalStyles.textCancel]}>
                Cancelar
              </Text>
            </TouchableOpacity>
            {loading ? <LoadingIndicator /> : null}
          </>
        ) : (
          <FormNewPassword cancel={cancel} newPassword={newPassword} />
        )}
      </BoxLinearGradient>
    </Modal>
  );
}
