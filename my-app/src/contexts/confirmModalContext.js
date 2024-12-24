import React, { createContext, useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const ConfirmModalContext = createContext({});

export default function ConfirmModalProvider({ children }) {
  const [modalState, setModalState] = useState({
    visible: false,
    title: "",
    message: "",
    onConfirm: null,
  });

  const showModal = (title, message, onConfirm) => {
    setModalState({ visible: true, title, message, onConfirm });
  };

  const hideModal = () => {
    setModalState((prevState) => ({ ...prevState, visible: false }));
  };

  const modalConfirm = (title, message, onConfirm) => {
    showModal(title, message, onConfirm);
  };

  return (
    <ConfirmModalContext.Provider
      value={{ showModal, hideModal, modalConfirm }}
    >
      {children}
      <Modal
        visible={modalState.visible}
        transparent={true}
        animationType="fade"
        onRequestClose={hideModal}
      >
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{modalState.title}</Text>
            </View>
            <Text style={styles.message}>{modalState.message}</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  modalState.onConfirm?.();
                  hideModal();
                }}
                activeOpacity={0.5}
              >
                <Text style={styles.buttonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={hideModal}
                activeOpacity={0.5}
              >
                <Text style={[styles.buttonText, styles.cancelButtonText]}>
                  Não
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ConfirmModalContext.Provider>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    elevation: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#339dd7",
    borderRadius: 100,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#f094c0",
  },
  cancelButtonText: {
    color: "#fff",
  },
});
