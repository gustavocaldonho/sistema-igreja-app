import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./style";
import stylesModal from "../style";
import { AuthContext } from "../../../../../contexts/auth";
import { useNavigation } from "@react-navigation/native";

export default function FormDefault({
  setModalVisible,
  modalVisible,
  community,
}) {
  const [errorPatron, setErrorPatron] = useState(false);
  const [errorLocation, setErrorLocation] = useState(false);
  const [patron, setPatron] = useState(community ? community.patron : "");
  const [location, setLocation] = useState(community ? community.location : "");
  const { communityList, setCommunityList } = useContext(AuthContext);
  const navigation = useNavigation();

  function addToList(item) {
    const newList = [...communityList];
    newList.push(item);
    setCommunityList(newList);
    setModalVisible(!modalVisible);
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

      <TouchableOpacity
        style={stylesModal.boxButton}
        activeOpacity={0.7}
        onPress={() => {
          const errorP = checkPatron(patron);
          const errorL = checkLocation(location);

          if (!errorP && !errorL) {
            if (!community) {
              id = communityList.length;
              addToList({ id, patron, location });
            } else {
              updateCommunity(community, { patron, location });
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
