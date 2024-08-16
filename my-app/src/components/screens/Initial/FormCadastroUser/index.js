import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Vibration,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./style";
import { AuthContext } from "../../../../contexts/auth";
import { useNavigation } from "@react-navigation/native";
import {
  checkCpf,
  checkEmail,
  checkText,
  checkDataNasc,
  formatDateBR,
  formatDateUSA,
  formatCpf,
  desformatCpf,
  checkPassword,
} from "./functions";
import { getCommunitiesWithoutToken } from "../../../../services/community_api";
import { signupUser, updateUser } from "../../../../services/user_api";

import InputGroupName from "../../../auxiliary/InputGroup/InputGroupName";
import InputGroupCpf from "../../../auxiliary/InputGroup/InputGroupCpf";
import InputGroupEmail from "../../../auxiliary/InputGroup/InputGroupEmail";
import InputGroupDN from "../../../auxiliary/InputGroup/InputGroupDN";
import InputGroupSelect from "../../../auxiliary/InputGroup/InputGroupSelect";
import AsyncStorage from "@react-native-async-storage/async-storage";
import InputGroupPassword from "../../../auxiliary/InputGroup/InputGroupPassword";

export default function FormCadastroUser({ user, setModalVisible }) {
  const [name, setName] = useState(user ? user.name : "");
  const [cpf, setCpf] = useState(user ? user.cpf : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [dataNasc, setDataNasc] = useState(
    user ? formatDateBR(user.birthday) : ""
  );
  const [community, setCommunity] = useState(user ? user.community : "");
  const [password, setPassword] = useState(user ? "" : "sEnha123456##");
  const [passwordConfirmation, setPasswordConfirmation] = useState(
    user ? "" : "sEnha123456##"
  );
  const [showErrors, setShowErrors] = useState(false);
  const { setDatasUser, setRegistryEntry } = useContext(AuthContext);
  const navigation = useNavigation();
  const [patronList, setPatronList] = useState([]);

  async function getPatrons() {
    try {
      const response = await getCommunitiesWithoutToken();
      setPatronList(response);
    } catch (error) {
      console.log(error);
    }
  }

  function getItemsSelectCommunity(dataList) {
    if (!dataList || dataList.length === 0) {
      return [{ label: "Sua Comunidade", value: "" }];
    }

    return [{ label: "Sua Comunidade", value: "" }].concat(
      dataList.map((d) => ({ label: d, value: d }))
    );
  }

  useEffect(() => {
    getPatrons();
  }, []);

  async function addUser(item) {
    try {
      const response = await signupUser(item);
      setRegistryEntry(false);
      resetInputs();
      console.log("(add): ", response);
      console.log("(add): ", item);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateDatasUser(newDatas) {
    try {
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await updateUser(newDatas, token);
      if (response.status === 200) {
        await AsyncStorage.setItem(
          "AccessToken",
          String(response.data.access_token)
        );
        await setDatasUser(response.data.access_token);
        setModalVisible(false);
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  }

  function resetInputs() {
    setName("");
    setCpf("");
    setEmail("");
    setDataNasc("");
    setCommunity("");
    setShowErrors(false);
  }

  function sendDatas() {
    if (
      !checkText(name) &&
      !checkCpf(cpf) &&
      !checkEmail(email) &&
      !checkDataNasc(dataNasc) &&
      !checkText(community) &&
      !checkPassword(password, passwordConfirmation)
    ) {
      if (!user) {
        addUser({
          name,
          cpf: desformatCpf(cpf),
          email,
          birthday: formatDateUSA(dataNasc),
          community,
          password,
        });
      } else {
        updateDatasUser({
          name,
          cpf: desformatCpf(cpf),
          email,
          birthday: formatDateUSA(dataNasc),
          community,
          password,
        });
      }
    } else {
      setShowErrors(true);
    }
  }
  return (
    <KeyboardAvoidingView
      style={styles.formContext}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 250}
    >
      <ScrollView style={styles.boxScrollView}>
        <Pressable style={styles.form} onPress={Keyboard.dismiss}>
          <InputGroupName
            iconName="user"
            placeholder="Digite seu Nome"
            defaultValue={name}
            onChangeText={(text) => {
              setName(text);
            }}
          />
          <Text style={styles.errorMessage}>
            {checkText(name) && showErrors ? "Nome Inválido!" : ""}
          </Text>

          <InputGroupCpf
            iconName="id-card"
            placeholder="000.000.000-00"
            value={cpf}
            // defaultValue={cpf}
            onChangeText={(text) => {
              setCpf(text);
            }}
          />
          <Text style={styles.errorMessage}>
            {checkCpf(cpf) && showErrors ? "CPF Inválido!" : ""}
          </Text>

          <InputGroupEmail
            iconName="envelope"
            placeholder="Digite seu E-mail"
            defaultValue={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <Text style={styles.errorMessage}>
            {checkEmail(email) && showErrors ? "Email Inválido" : ""}
          </Text>

          <InputGroupDN
            iconName="birthday-cake"
            placeholder="DD/MM/AAAA"
            value={dataNasc}
            // defaultValue={dataNasc}
            onChangeText={(text) => {
              setDataNasc(text);
            }}
          />
          <Text style={styles.errorMessage}>
            {checkDataNasc(dataNasc) && showErrors
              ? "Data de Nascimento Inválida!"
              : ""}
          </Text>

          <InputGroupSelect
            iconName="church"
            options={getItemsSelectCommunity(patronList)}
            selectedValue={community}
            onValueChange={(text) => {
              setCommunity(text);
            }}
          />
          <Text style={styles.errorMessage}>
            {checkText(community) && showErrors
              ? "Selecione uma Comunidade!"
              : ""}
          </Text>

          {user ? (
            <View>
              <InputGroupPassword
                iconName="key"
                placeholder="Sua senha"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                }}
                style={{ marginBottom: 10 }}
              />
              <InputGroupPassword
                iconName="key"
                placeholder="Confirme sua senha"
                value={passwordConfirmation}
                onChangeText={(text) => {
                  setPasswordConfirmation(text);
                }}
              />

              <Text style={[styles.errorMessage, styles.errorMessagePassword]}>
                {checkPassword(password, passwordConfirmation) && showErrors
                  ? "Senha Inválida! (Mínimo de 4 dígitos)"
                  : ""}
              </Text>
            </View>
          ) : (
            ""
          )}

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              sendDatas();
              // console.log(
              // `password: ${password}, passwordConfirmation: ${passwordConfirmation}`
              // );
            }}
          >
            <Text style={styles.textButton}>
              {user ? "Atualizar" : "Cadastrar"}
            </Text>
          </TouchableOpacity>
          {user ? (
            <TouchableOpacity
              style={[styles.button, styles.buttonCancel]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textButton}>Cancelar</Text>
            </TouchableOpacity>
          ) : (
            ""
          )}
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
