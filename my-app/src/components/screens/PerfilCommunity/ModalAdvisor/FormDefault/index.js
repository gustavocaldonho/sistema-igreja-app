import React, { useState, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import InputGroupSelectAdvisor from "../../../../auxiliary/InputGroup/InputGroupSelectAdvisor";
import styles from "./style";
import stylesModal from "../style";
import { AuthContext } from "../../../../../contexts/auth";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getUsersCommunity,
  updateAdvisor,
  upgradeUser,
} from "../../../../../services/user_api";

export default function FormDefault({
  patron,
  setAdvisorModalVisible,
  advisorModalVisible,
  itemAdvisorClicked,
}) {
  const [errorCpf, setErrorCpf] = useState(false);
  const [errorResponsibility, setErrorResponsibility] = useState(false);

  const [cpf, setCpf] = useState(
    itemAdvisorClicked ? itemAdvisorClicked.cpf : ""
  );
  const [responsibility, setResponsibility] = useState(
    itemAdvisorClicked ? itemAdvisorClicked.responsibility : ""
  );
  const [userList, setUserList] = useState([]);
  const navigation = useNavigation();

  async function upgradeUserForm(cpf, responsibility, position) {
    const token = await AsyncStorage.getItem("AccessToken");
    const response = await upgradeUser(
      { cpf, position, responsibility },
      token
    );
    if (response.status === 204) {
      setAdvisorModalVisible(!advisorModalVisible);
    }
  }

  function getItemsSelectUsers(dataList, itemAdvisorClicked) {
    if (itemAdvisorClicked.cpf !== undefined) {
      return [
        { label: itemAdvisorClicked.name, value: itemAdvisorClicked.cpf },
      ];
    }
    if (!dataList || dataList.length === 0) {
      return [{ label: "Escolha um usuário", value: "" }];
    }
    return [{ label: "Escolha um usuário", value: "" }].concat(
      dataList.map((d) => ({ label: d.name, value: d.cpf }))
    );
  }

  async function getUsersForm(patron) {
    const token = await AsyncStorage.getItem("AccessToken");
    const response = await getUsersCommunity(patron, token);
    // filtrar os users q já são council member
    if (response.status === 200) {
      setUserList(response.data);
    }
  }

  useEffect(() => {
    getUsersForm(patron);
  }, []);

  function checkCpf(text) {
    if (text === "" || text === undefined) {
      setErrorCpf(true);
      return true;
    } else {
      setErrorCpf(false);
      return false;
    }
  }

  function checkResponsability(text) {
    if (text === "" || text === undefined) {
      setErrorResponsibility(true);
      return true;
    } else {
      setErrorResponsibility(false);
      return false;
    }
  }

  return (
    <View>
      <View style={stylesModal.boxTitle}>
        <Text style={stylesModal.title}>Nome</Text>
        <Text style={stylesModal.textError}>{errorCpf ? "*" : ""}</Text>
      </View>
      <InputGroupSelectAdvisor
        style={errorCpf ? styles.error : null}
        options={getItemsSelectUsers(userList, itemAdvisorClicked)}
        selectedValue={cpf}
        onValueChange={(text) => {
          setCpf(text);
          checkCpf(text);
        }}
      />
      <View style={stylesModal.boxTitle}>
        <Text style={stylesModal.title}>Cargo/Função</Text>
        <Text style={stylesModal.textError}>
          {errorResponsibility ? "*" : ""}
        </Text>
      </View>
      <TextInput
        style={[styles.input, errorResponsibility ? styles.error : null]}
        placeholder="ex.: Diretor Geral"
        placeholderTextColor={"#88C6E7"}
        onChangeText={(text) => {
          setResponsibility(text);
          checkResponsability(text);
        }}
        defaultValue={responsibility}
      />
      <TouchableOpacity
        style={stylesModal.boxButton}
        activeOpacity={0.7}
        onPress={() => {
          const errorC = checkCpf(cpf);
          const errorR = checkResponsability(responsibility);

          if (!errorC && !errorR) {
            if (itemAdvisorClicked.length === undefined) {
              upgradeUserForm(cpf, responsibility, "council member");
            } else {
              upgradeUserForm(cpf, responsibility, "council member");
            }
          }
        }}
      >
        <Text style={stylesModal.textButton}>
          {itemAdvisorClicked.id ? "Atualizar" : "Adicionar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
