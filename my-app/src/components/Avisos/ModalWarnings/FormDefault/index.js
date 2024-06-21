import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
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
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [title, setTitle] = useState(itemClicked ? itemClicked.title : "");
  const [message, setMessage] = useState(
    itemClicked ? itemClicked.message : ""
  );
  const [visibleToParish, setVisibleToParish] = useState(
    itemClicked ? itemClicked.visibleToParish : false
  );

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

  function checkTitle(text) {
    if (text === "") {
      setErrorTitle(true);
      return true;
    } else {
      setErrorTitle(false);
      return false;
    }
  }

  function checkMessage(text) {
    if (text === "") {
      setErrorMessage(true);
      return true;
    } else {
      setErrorMessage(false);
      return false;
    }
  }

  return (
    <View>
      <View style={stylesModal.boxTitle}>
        <Text style={stylesModal.title}>Título</Text>
        <Text style={stylesModal.textError}>{errorTitle ? "*" : ""}</Text>
      </View>
      <TextInput
        style={[styles.input, errorTitle ? styles.error : null]}
        placeholder="Digite um título..."
        placeholderTextColor={"#88C6E7"}
        onChangeText={(text) => {
          setTitle(text);
          checkTitle(text);
        }}
        defaultValue={itemClicked.title}
      />
      <View style={stylesModal.boxTitle}>
        <Text style={stylesModal.title}>Mensagem</Text>
        <Text style={stylesModal.textError}>{errorMessage ? "*" : ""}</Text>
      </View>
      <TextInput
        style={[
          styles.input,
          styles.areaInput,
          errorMessage ? styles.error : null,
        ]}
        placeholder="Digite uma mensagem..."
        placeholderTextColor={"#88C6E7"}
        multiline={true}
        numberOfLines={5}
        onChangeText={(text) => {
          setMessage(text);
          checkMessage(text);
        }}
        defaultValue={itemClicked.message}
      />

      <View style={styles.boxSwitch}>
        <Text style={styles.textSwitch}>Visível para toda a Paróquia</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#E1E0E1" }}
          thumbColor={visibleToParish ? "#339dd7" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setVisibleToParish(!visibleToParish)}
          value={visibleToParish}
        />
      </View>

      <TouchableOpacity
        style={stylesModal.boxButton}
        activeOpacity={0.7}
        onPress={() => {
          const errorT = checkTitle(title);
          const errorM = checkMessage(message);

          if (!errorT && !errorM) {
            if (itemClicked.id === undefined) {
              id = warningList.length;
              addToList({ id, title, message, visibleToParish });
            } else {
              editItemFromList({
                id: itemClicked.id,
                title,
                message,
                visibleToParish,
              });
            }
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
