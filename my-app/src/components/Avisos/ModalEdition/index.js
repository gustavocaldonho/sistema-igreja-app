import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";

export default function ModalEdition({
  modalVisible,
  setModalVisible,
  warningList,
  setWarningList,
  itemClicked,
  setItemClicked,
}) {
  let title = itemClicked ? itemClicked.title : "";
  let message = itemClicked ? itemClicked.message : "";

  function addToList(item) {
    const newList = [...warningList];
    newList.push(item);
    setWarningList(newList);
    setModalVisible(!modalVisible);
  }

  function editItemFromList(item) {
    const newList = [...warningList];

    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id === item.id) {
        newList[i].title = item.title;
        newList[i].message = item.message;
      }
    }
    setWarningList(newList);
    setModalVisible(!modalVisible);
    itemClicked = undefined;
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
                setItemClicked({});
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
              defaultValue={itemClicked.title}
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
              defaultValue={itemClicked.message}
            />
            <TouchableOpacity
              style={styles.boxButtonAdd}
              activeOpacity={0.7}
              onPress={() => {
                if (
                  title.length > 0 &&
                  message.length > 0 &&
                  itemClicked.id === undefined
                ) {
                  id = warningList.length;
                  addToList({ id, title, message });
                }
                if (
                  title.length > 0 &&
                  message.length > 0 &&
                  itemClicked.id !== undefined
                ) {
                  editItemFromList({
                    id: itemClicked.id,
                    title,
                    message,
                  });
                }
              }}
            >
              <Text style={styles.textButtonAdd}>
                {itemClicked.id === undefined ? "Adicionar" : "Alterar"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
