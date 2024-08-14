import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./style";
import stylesModal from "../style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createWarning,
  updateWarning,
} from "../../../../../services/warning_api";

export default function FormDefault({
  itemClicked,
  setModalVisible,
  modalVisible,
}) {
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDescription, setErrorDescription] = useState(false);
  const [title, setTitle] = useState(
    itemClicked.title ? itemClicked.title : ""
  );
  const [description, setDescription] = useState(
    itemClicked.description ? itemClicked.description : ""
  );
  const [scope, setScope] = useState(
    itemClicked.scope ? itemClicked.scope : "private"
  );

  async function createWarningForm(item) {
    const token = await AsyncStorage.getItem("AccessToken");
    const response = await createWarning(item, token);
    if (response.status === 201) {
      setModalVisible(!modalVisible);
    }
  }

  async function updateWarningForm(item) {
    const token = await AsyncStorage.getItem("AccessToken");
    const response = await updateWarning(item, token);
    if (response.status === 204) {
      setModalVisible(!modalVisible);
      itemClicked = undefined;
    }
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

  function checkDescription(text) {
    if (text === "") {
      setErrorDescription(true);
      return true;
    } else {
      setErrorDescription(false);
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
        <Text style={stylesModal.textError}>{errorDescription ? "*" : ""}</Text>
      </View>
      <TextInput
        style={[
          styles.input,
          styles.areaInput,
          errorDescription ? styles.error : null,
        ]}
        placeholder="Digite uma mensagem..."
        placeholderTextColor={"#88C6E7"}
        multiline={true}
        numberOfLines={5}
        onChangeText={(text) => {
          setDescription(text);
          checkDescription(text);
        }}
        defaultValue={itemClicked.description}
      />

      <View style={styles.boxSwitch}>
        <Text style={styles.textSwitch}>Visível para toda a Paróquia</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#E1E0E1" }}
          thumbColor={scope === "public" ? "#339dd7" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() =>
            scope === "public" ? setScope("private") : setScope("public")
          }
          value={scope === "public" ? true : false}
        />
      </View>

      <TouchableOpacity
        style={stylesModal.boxButton}
        activeOpacity={0.7}
        onPress={() => {
          const errorT = checkTitle(title);
          const errorM = checkDescription(description);

          if (!errorT && !errorM) {
            if (itemClicked.id === undefined) {
              createWarningForm({
                title,
                description,
                scope,
              });
            } else {
              updateWarningForm({
                id: itemClicked.id,
                title,
                description,
                scope,
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
