import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./style";
import stylesModal from "../style";

export default function FormDefault({
  warningList,
  setWarningList,
  itemClicked,
  setModalVisible,
  modalVisible,
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
    <View>
      <Text style={stylesModal.title}>Título</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um título..."
        placeholderTextColor={"#88C6E7"}
        onChangeText={(text) => {
          title = text;
        }}
        defaultValue={itemClicked.title}
      />
      <Text style={stylesModal.title}>Mensagem</Text>
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
        style={stylesModal.boxButton}
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
        <Text style={stylesModal.textButton}>
          {itemClicked.id === undefined ? "Adicionar" : "Alterar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
