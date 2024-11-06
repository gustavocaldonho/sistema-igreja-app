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
  ActivityIndicator,
  Alert,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import styles from "./style";
import InputGroupCpf from "../../../auxiliary/InputGroup/InputGroupCpf";
import InputGroupPassword from "../../../auxiliary/InputGroup/InputGroupPassword";
import { useNavigation } from "@react-navigation/native";
import { desformatCpf, formatCpf } from "../FormCadastroUser/functions";
import { AuthContext } from "../../../../contexts/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AlertMsg from "../../../auxiliary/AlertMsg";

export default function FormLogin() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const navigation = useNavigation();
  const { signIn, setRegistryEntry } = useContext(AuthContext);
  const [visibleSpinner, setVisibleSpinner] = useState(false);

  async function login(data) {
    try {
      setVisibleSpinner(true);
      const response = await signIn(data);
      if (response.data.access_token !== undefined) {
        resetInputs();
        navigation.navigate("Menu");
      } else {
        throw new Error("Não foi possível fazer login.");
      }
    } catch (error) {
      // Se o login automático der erro (login está no storage), não mostra a msg de erro.
      AsyncStorage.getItem("Login").then((item) => {
        console.log("Login storage: ", item);
        item !== null ? setShowError(false) : setShowError(true);
      });
      console.log("error (login): ", error);
      console.log("data (login): ", data);
    } finally {
      setShowError(false);
      setVisibleSpinner(false);
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
        login(JSON.parse(data));
      }
    };
    makeLogin();
  }, []);

  return (
    // usar <ScrollView></ScrollView>
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
          onChangeText={(text) => {
            setCpf(text);
          }}
        />
        <InputGroupPassword
          iconName="key"
          // style={styles.input}
          placeholder="Digite sua senha"
          defaultValue={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <TouchableOpacity>
          {/* <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text> */}
          <Text style={styles.forgotPassword}></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // login({ cpf: "49403669012", password: "Te0101##" });
            login({ cpf: "14734570760", password: "Gu2405##" });
            // login({ cpf: "99991581022", password: "Gi0401##" });
            // login({ cpf: "53705211072", password: "Jo2908##" });
            // login({ cpf: "76903821007", password: "Di1406##" });
            // login({ cpf: "91314128078", password: "Ag1405##" });
            // login({ cpf: "49824720090", password: "Hu3001##" });
            // login({ cpf: "88448720059", password: "Ra0101##" });
            // login({ cpf: "26536306058", password: "Fa0101##" });
            // c
            // login({ cpf: "32300950065", password: "sEnha123456**" });
            // login({ cpf: desformatCpf(cpf), password });
          }}
        >
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setRegistryEntry(true);
          }}
        >
          <Text style={styles.textButton}>Criar Conta</Text>
        </TouchableOpacity>
      </Pressable>
    </View>
  );
}
