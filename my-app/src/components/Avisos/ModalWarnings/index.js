import React from "react";
import { Modal, View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import FormDefault from "./FormDefault";
import FormConfirmation from "./FormConfirmation";

export default function ModalWarning({
  modalVisible,
  setModalVisible,
  warningList,
  setWarningList,
  itemClicked,
  setItemClicked,
  formModalDefaultVisible,
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

          {formModalDefaultVisible ? (
            <FormDefault
              warningList={warningList}
              setWarningList={setWarningList}
              itemClicked={itemClicked}
              setModalVisible={setModalVisible}
              modalVisible={modalVisible}
            />
          ) : (
            <FormConfirmation
              itemClicked={itemClicked}
              setItemClicked={setItemClicked}
              warningList={warningList}
              setWarningList={setWarningList}
              setModalVisible={setModalVisible}
              modalVisible={modalVisible}
            />
          )}
        </View>
      </View>
    </Modal>
  );
}
