import React from "react";
import { View, Modal } from "react-native";
import { BlurView } from "expo-blur";
import styles from "./style";

export default function ModalBase({ children }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <BlurView style={[styles.absolute]} tint={"dark"} intensity={50}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>{children}</View>
        </View>
      </BlurView>
    </Modal>
  );
}
