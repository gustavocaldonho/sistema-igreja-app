import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./style";
import stylesModal from "../style";
import { AuthContext } from "../../../../../contexts/auth";
import { useNavigation } from "@react-navigation/native";
import { checkEmail } from "../../../Initial/FormCadastroUser/functions";
import { cadastryCommunity } from "../../../../../services/community_api";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const { communityList, setCommunityList } = useContext(AuthContext);
  const navigation = useNavigation();

  async function createCommunity(data) {
    const token = await AsyncStorage.getItem("AccessToken");
    const response = await cadastryCommunity(data, token);
    if (response.status === 201) {
      setModalVisible(!modalVisible);
    } else {
      // exibir uma msg de erro
      console.log(response);
    }
  }

  function updateCommunity(oldDatas, newDatas) {
    for (let i = 0; i < communityList.length; i++) {
      if (communityList[i].id === oldDatas.id) {
        communityList[i].patron = newDatas.patron;
        communityList[i].location = newDatas.location;
      }
    }
    setModalVisible(false);
    navigation.navigate("Menu");
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

      <TouchableOpacity
        style={stylesModal.boxButton}
        activeOpacity={0.7}
        onPress={() => {
          const errorP = checkPatron(patron);
          const errorL = checkLocation(location);
          const errorE = checkEmailForm(email);

          // if (!errorP && !errorL && errorE) {
          //   if (!community) {
          //     id = communityList.length;
          //     addToList({ id, patron, location });
          //   } else {
          //     updateCommunity(community, { patron, location });
          //   }
          // }

          if (!errorP && !errorL && !errorE) {
            if (!community) {
              createCommunity({ patron, location, email, image: "" });
            } else {
              // updateCommunity(community, { patron, location });
            }
          }
        }}
      >
        <Text style={stylesModal.textButton}>
          {community ? "Atualizar" : "Adicionar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
