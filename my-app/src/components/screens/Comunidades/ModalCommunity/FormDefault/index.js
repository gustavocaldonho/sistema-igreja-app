import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./style";
import stylesModal from "../style";
import { useNavigation } from "@react-navigation/native";
import { checkEmail } from "../../../Initial/FormCadastroUser/functions";
import {
  cadastryCommunity,
  updateCommunity,
} from "../../../../../services/community_api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoadingIndicator from "../../../../auxiliary/LoadingIndicator";
import { ModalContext } from "../../../../../contexts/modalContext";

export default function FormDefault({
  setModalVisible,
  modalVisible,
  community,
}) {
  const [errorPatron, setErrorPatron] = useState(false);
  const [errorLocation, setErrorLocation] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [patron, setPatron] = useState(community ? community.patron : "");
  const [location, setLocation] = useState(community ? community.location : "");
  const [email, setEmail] = useState(community ? community.email : "");
  const [visibleIndicator, setVisibleIndicator] = useState(false);
  const navigation = useNavigation();
  const { modalAlert } = useContext(ModalContext);

  async function createCommunity(data) {
    try {
      setVisibleIndicator(true);
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await cadastryCommunity(data, token);
      if (response.status === 201) {
        setModalVisible(!modalVisible);
        navigation.goBack();
      } else {
        throw new Error(
          "Não foi possível criar a comunidade. Tente novamente mais tarde."
        );
      }
    } catch (error) {
      modalAlert("Ops!", error.message);
    } finally {
      setVisibleIndicator(false);
    }
  }

  async function updateCommunityForm(patronUpdate, data) {
    try {
      setVisibleIndicator(true);
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await updateCommunity(patronUpdate, data, token);
      if (response.status === 204) {
        navigation.navigate("Menu");
        setModalVisible(false);
      } else {
        throw new Error(
          "Não foi possível atualizar a comunidade. Tente novamente mais tarde."
        );
      }
    } catch (error) {
      modalAlert("Ops!", error.message);
    } finally {
      setVisibleIndicator(false);
    }
  }

  function checkPatron(text) {
    if (text === "") {
      setErrorPatron(true);
      return true;
    } else {
      setErrorPatron(false);
      return false;
    }
  }

  function checkLocation(text) {
    if (text === "") {
      setErrorLocation(true);
      return true;
    } else {
      setErrorLocation(false);
      return false;
    }
  }

  function checkEmailForm(text) {
    const error = checkEmail(text);
    setErrorEmail(error);
    return error;
  }

  return (
    <View>
      <View style={stylesModal.boxTitle}>
        <Text style={stylesModal.title}>Padroeiro</Text>
        <Text style={stylesModal.textError}>{errorPatron ? "*" : ""}</Text>
      </View>
      <TextInput
        style={[styles.input, errorPatron ? styles.error : null]}
        placeholder="ex.: São Geraldo Magela"
        placeholderTextColor={"#88C6E7"}
        onChangeText={(text) => {
          setPatron(text);
          checkPatron(text);
        }}
        defaultValue={patron}
      />
      <View style={stylesModal.boxTitle}>
        <Text style={stylesModal.title}>Localização</Text>
        <Text style={stylesModal.textError}>{errorLocation ? "*" : ""}</Text>
      </View>
      <TextInput
        style={[styles.input, errorLocation ? styles.error : null]}
        placeholder="ex.: Sapucaia"
        placeholderTextColor={"#88C6E7"}
        onChangeText={(text) => {
          setLocation(text);
          checkLocation(text);
        }}
        defaultValue={location}
      />
      <View style={stylesModal.boxTitle}>
        <Text style={stylesModal.title}>Email</Text>
        <Text style={stylesModal.textError}>{errorEmail ? "*" : ""}</Text>
      </View>
      <TextInput
        style={[styles.input, errorEmail ? styles.error : null]}
        placeholder="ex.: saogeraldosapucaia@gmail.com"
        placeholderTextColor={"#88C6E7"}
        onChangeText={(text) => {
          setEmail(text);
          checkEmailForm(text);
        }}
        defaultValue={email}
      />

      {visibleIndicator ? (
        <LoadingIndicator color="#339dd7" />
      ) : (
        <TouchableOpacity
          style={stylesModal.boxButton}
          activeOpacity={0.7}
          onPress={() => {
            const errorP = checkPatron(patron);
            const errorL = checkLocation(location);
            const errorE = checkEmailForm(email);

            if (!errorP && !errorL && !errorE) {
              if (!community) {
                createCommunity({
                  patron: patron.trim(),
                  location: location.trim(),
                  email: email.trim(),
                  image: "",
                });
              } else {
                updateCommunityForm(community.patron, {
                  patron: patron.trim(),
                  location: location.trim(),
                  email: email.trim(),
                });
              }
            }
          }}
        >
          <Text style={stylesModal.textButton}>
            {community ? "Atualizar" : "Adicionar"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
