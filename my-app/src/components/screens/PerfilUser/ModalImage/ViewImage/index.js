import React from "react";
import { Modal, View, Image, TouchableOpacity, Text } from "react-native";
import styles from "./style";

export default function ViewImage({ visible, onClose, image }) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: `data:image/png;base64,${image}` }}
            style={styles.fullImage}
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.textClose}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
