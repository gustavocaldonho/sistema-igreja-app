import React, { createContext, useState } from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";

export const ModalContext = createContext({});

export default function ModalProvider({ children }) {
  const [modalState, setModalState] = useState({
    visible: false,
    title: "",
    message: "",
  });

  const showModal = (title, message) => {
    setModalState({ visible: true, title, message });
  };

  const hideModal = () => {
    setModalState({ ...modalState, visible: false });
  };

  const modalAlert = (title, message) => {
    showModal(title, message);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal, modalAlert }}>
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
            <Pressable style={styles.button} onPress={hideModal}>
              <Text style={styles.buttonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ModalContext.Provider>
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
  button: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#339dd7",
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
