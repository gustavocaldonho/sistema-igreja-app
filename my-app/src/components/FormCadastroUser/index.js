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
import { AuthContext } from "../../contexts/auth";

import InputGroupName from "../InputGroup/InputGroupName";
import InputGroupCpf from "../InputGroup/InputGroupCpf";
import InputGroupEmail from "../InputGroup/InputGroupEmail";
import InputGroupDN from "../InputGroup/InputGroupDN";
import InputGroupSelect from "../InputGroup/InputGroupSelect";

export default function FormCadastroUser() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [community, setCommunity] = useState("");
  const [password, setPassword] = useState("1234");
  const [showErrors, setShowErrors] = useState(false);

  const { userList, setUserList } = useContext(AuthContext);

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

  function addUser(userList, setUserList, item) {
    const newList = [...userList];
    newList.push(item);
    setUserList(newList);
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
            options={[
              { label: "Sua Comunidade", value: "" },
              { label: "Comunidade A", value: "a" },
              { label: "Comunidade B", value: "b" },
              { label: "Comunidade C", value: "c" },
            ]}
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
            style={styles.buttonCadastro}
            onPress={() => {
              setShowErrors(true);

              if (
                !checkText(name) &&
                !checkCpf(cpf) &&
                !checkEmail(email) &&
                !checkDataNasc(dataNasc) &&
                !checkText(community)
              ) {
                addUser(userList, setUserList, {
                  name,
                  cpf,
                  email,
                  dataNasc,
                  comunidade: community,
                  password,
                });
                setName("");
                setCpf("");
                setEmail("");
                setDataNasc("");
                setCommunity("");
                setShowErrors(false);
              }
            }}
          >
            <Text style={styles.textButtonCadastro}>Cadastrar</Text>
          </TouchableOpacity>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
