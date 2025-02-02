import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import styles from "./style";
import InputGroupCpf from "../../../auxiliary/InputGroup/InputGroupCpf";
import InputGroupPassword from "../../../auxiliary/InputGroup/InputGroupPassword";
import { useNavigation } from "@react-navigation/native";
import { desformatCpf, formatCpf } from "../FormCadastroUser/functions";
import { AuthContext } from "../../../../contexts/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AccountRecoveryModal from "../AccountRecoveryModal";
import { ModalContext } from "../../../../contexts/modalContext";

export default function FormLogin() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [visibleSpinner, setVisibleSpinner] = useState(false);
  const [isRecoveryModalVisible, setRecoveryModalVisible] = useState(false);

  const navigation = useNavigation();
  const {
    signIn,
    setRegistryEntry,
    registryEntry,
    registeredUser,
    setRegisteredUser,
  } = useContext(AuthContext);
  const { modalAlert } = useContext(ModalContext);

  async function login(data) {
    console.log(data);
    try {
      setVisibleSpinner(true);
      const response = await signIn(data);
      if (response.data.access_token !== undefined) {
        resetInputs();
        navigation.navigate("Menu");
      } else {
        item !== null ? setShowError(false) : setShowError(true);
        throw new Error("Não foi possível fazer login.");
      }
    } catch (error) {
      // Se o login automático der erro (login está no storage), não mostra a msg de erro.
      AsyncStorage.getItem("Login").then((item) => {
        // console.log("Login storage: ", item);
        item !== null ? setShowError(false) : setShowError(true);
      });
      console.log("error (login): ", error);
      console.log("data (login): ", data);
      // modalAlert("Ops!", error.message);
    } finally {
      setShowError(false);
      setVisibleSpinner(false);
      setRegisteredUser({});
    }
  }

  function resetInputs() {
    setCpf("");
    setPassword("");
  }

  // Login automático, se tiver um usuário (cpf e password) salvo no async storage
  useEffect(() => {
    const makeLogin = async () => {
      const data = await AsyncStorage.getItem("Login");
      if (data !== null) {
        const parsedData = JSON.parse(data);
        login(parsedData);
      }
    };
    makeLogin();
  }, []);

  // Login automático feito logo após um usuário novo se cadastrar
  useEffect(() => {
    if (registeredUser.cpf !== undefined) {
      login({
        cpf: desformatCpf(registeredUser.cpf),
        password: registeredUser.password,
      });
    }
  }, [registryEntry]);

  return (
    <View style={styles.formContext}>
      <Spinner visible={visibleSpinner} />
      <Pressable style={styles.form} onPress={Keyboard.dismiss}>
        <Text style={styles.errorMessage}>
          {showError ? "Credenciais Inválidas!" : ""}
        </Text>
        <InputGroupCpf
          iconName="id-card"
          style={styles.input}
          placeholder="000.000.000-00"
          value={cpf}
          onChangeText={setCpf}
        />
        <InputGroupPassword
          iconName="key"
          placeholder="Digite sua senha"
          defaultValue={password}
          onChangeText={setPassword}
        />
        {/* <TouchableOpacity
          onPress={() => setRecoveryModalVisible(true)}
          activeOpacity={0.4}
        >
          <Text style={styles.forgotPassword}>
            Esqueceu sua senha? Clique aqui.
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            login({ cpf: desformatCpf(cpf), password });
          }}
        >
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setRegistryEntry(true)}
        >
          <Text style={styles.textButton}>Criar Conta</Text>
        </TouchableOpacity>
      </Pressable>

      {/* Componente do modal de verificação */}
      <AccountRecoveryModal
        isVisible={isRecoveryModalVisible}
        onClose={() => setRecoveryModalVisible(false)}
      />
    </View>
  );
}
