import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import modalStyles from "./style";
import BoxLinearGradient from "../../PageBase/BoxLinearGradient";
import LoadingIndicator from "../../../auxiliary/LoadingIndicator";
import FormCpf from "./FormCpf";
import FormSMS from "./FormSMS";
import FormNewPassword from "./FormNewPassword";

export default function AccountRecoveryModal({ isVisible, onClose }) {
  const [loading, setLoading] = useState(false);
  const [isVisibleFormCpf, setIsVisibleFormCpf] = useState(false);
  const [newPassword, setNewPassword] = useState("Se0203##");

  const [result, setResult] = useState("");

  const cancel = () => {
    onClose();
    setLoading(false);
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <BoxLinearGradient style={modalStyles.modalContainer}>
        {!result ? (
          <>
            {isVisibleFormCpf ? (
              <FormCpf loading={loading} setLoading={setLoading} />
            ) : (
              <FormSMS loading={loading} setLoading={setLoading} />
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
          <FormNewPassword
            isVisible={isVisible}
            onClose={onClose}
            newPassword={newPassword}
          />
        )}
      </BoxLinearGradient>
    </Modal>
  );
}
