import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";

export default function ModalWarning({
  modalVisible,
  setModalVisible,
  warningList,
  setWarningList,
}) {
  let title = "";
  let message = "";

  function addToList(item) {
    const newList = [...warningList];
    newList.push(item);
    setWarningList(newList);

    setModalVisible(!modalVisible);
  }

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

          <View>
            <Text style={styles.title}>Título</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite um título..."
              placeholderTextColor={"#88C6E7"}
              onChangeText={(text) => {
                title = text;
              }}
            />
            <Text style={styles.title}>Mensagem</Text>
            <TextInput
              style={[styles.input, styles.areaInput]}
              placeholder="Digite uma mensagem..."
              placeholderTextColor={"#88C6E7"}
              multiline={true}
              numberOfLines={5}
              onChangeText={(text) => {
                message = text;
              }}
            />
            <TouchableOpacity
              style={styles.boxButtonAdd}
              activeOpacity={0.7}
              onPress={() => {
                if (title.length > 0 && message.length > 0)
                  addToList({ title, message });
              }}
            >
              <Text style={styles.textButtonAdd}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
