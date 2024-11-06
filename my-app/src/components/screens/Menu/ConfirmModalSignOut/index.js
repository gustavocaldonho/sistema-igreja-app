import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

export default function ConfirmModalSignOut({ visible, onConfirm, onCancel }) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Deseja realmente sair?</Text>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={onConfirm}
              activeOpacity={0.5}
            >
              <Text style={styles.modalButtonText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.cancelButton]}
              onPress={onCancel}
              activeOpacity={0.5}
            >
              <Text style={[styles.modalButtonText, styles.cancelButtonText]}>
                Não
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
