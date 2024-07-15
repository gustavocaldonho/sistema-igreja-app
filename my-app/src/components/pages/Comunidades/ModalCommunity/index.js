import React from "react";
import { Modal, View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import FormDefault from "./FormDefault";

export default function ModalCommunity({ modalVisible, setModalVisible }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.boxIconClose}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Icon name="close" style={styles.iconClose} />
            </TouchableOpacity>
          </View>

          <FormDefault
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
          />
        </View>
      </View>
    </Modal>
  );
}
