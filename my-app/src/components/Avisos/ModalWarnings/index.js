import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import FormDefault from "./FormDefault";

export default function ModalWarning({
  modalVisible,
  setModalVisible,
  warningList,
  setWarningList,
  itemClicked,
  setItemClicked,
}) {
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
                setItemClicked({});
              }}
            >
              <Icon name="close" style={styles.iconClose} />
            </TouchableOpacity>
          </View>

          <FormDefault
            warningList={warningList}
            setWarningList={setWarningList}
            itemClicked={itemClicked}
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
          />

          {/* <View>
            <Text style={[styles.title, { textAlign: "center", fontSize: 20 }]}>
              Deseja excluir o aviso?
            </Text>
            <View style={styles.boxButtonsConfirmation}>
              <TouchableOpacity style={styles.boxButton}>
                <Text style={styles.textButton}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxButton}>
                <Text style={styles.textButton}>Não</Text>
              </TouchableOpacity>
            </View>
          </View> */}
        </View>
      </View>
    </Modal>
  );
}
