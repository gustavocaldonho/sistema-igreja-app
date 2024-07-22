import React, { useState, useContext } from "react";
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

import InputGroupName from "../../../auxiliary/InputGroup/InputGroupName";
import InputGroupCpf from "../../../auxiliary/InputGroup/InputGroupCpf";
import InputGroupEmail from "../../../auxiliary/InputGroup/InputGroupEmail";
import InputGroupDN from "../../../auxiliary/InputGroup/InputGroupDN";
import InputGroupSelect from "../../../auxiliary/InputGroup/InputGroupSelect";

export default function FormCadastroUser({ user, setModalVisible }) {
  const [name, setName] = useState(user ? user.name : "");
  const [cpf, setCpf] = useState(user ? user.cpf : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [dataNasc, setDataNasc] = useState(user ? user.dataNasc : "");
  const [community, setCommunity] = useState(user ? user.community : "");
  const [password, setPassword] = useState("1234");
  const [showErrors, setShowErrors] = useState(false);
  const { userList, setUserList, setUser, communityList } =
    useContext(AuthContext);
  const navigation = useNavigation();

  function checkText(text) {
    return text === "" ? true : false;
  }

  function checkCpf(cpf) {
    return cpf.length !== 14 ? true : false;
  }

  function checkEmail(email) {
    return !email.includes("@") || !email.includes(".com") ? true : false;
  }

  function checkDataNasc(dataNasc) {
    return dataNasc.length !== 10 ? true : false;
  }

  function addUser(item) {
    const newList = [...userList];
    newList.push(item);
    setUserList(newList);
  }

  function updateUser(oldDatas, newDatas) {
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].cpf === oldDatas.cpf) {
        userList[i].cpf = newDatas.cpf;
        userList[i].name = newDatas.name;
        userList[i].dataNasc = newDatas.dataNasc;
        userList[i].email = newDatas.email;
        userList[i].community = newDatas.community;
        // userList[i].password = newDatas.password;
      }
    }
    setUser({ cpf, name, dataNasc, email, community });
    setModalVisible(false);
    navigation.goBack();
  }

  function getCommunities() {
    let list = [{ label: "Sua Comunidade", value: "" }];
    communityList.map((c, idx) => list.push({ label: c.patron, value: c.id }));
    return list;
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
      !checkText(community)
    ) {
      if (!user) {
        addUser({
          name,
          cpf,
          email,
          dataNasc,
          community,
          password,
        });
        resetInputs();
      } else {
        updateUser(user, {
          name,
          cpf,
          email,
          dataNasc,
          community,
          password,
        });
        // mostrar msg de sucesso e fechar modal
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
            options={getCommunities()}
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

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              sendDatas();
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
