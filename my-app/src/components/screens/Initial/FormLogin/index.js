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
} from "react-native";
import styles from "./style";
import InputGroupCpf from "../../../auxiliary/InputGroup/InputGroupCpf";
import InputGroupPassword from "../../../auxiliary/InputGroup/InputGroupPassword";
import { useNavigation } from "@react-navigation/native";
import { desformatCpf, formatCpf } from "../FormCadastroUser/functions";
import { AuthContext } from "../../../../contexts/auth";

export default function FormLogin() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const navigation = useNavigation();
  const { signIn, setRegistryEntry } = useContext(AuthContext);

  async function login(data) {
    try {
      const response = await signIn(data);
      if (response.data.access_token !== undefined) {
        resetInputs();
        setShowError(false);
        navigation.navigate("Menu");
      }
    } catch (error) {
      setShowError(true);
      console.log("error (login): ", error);
    }
  }

  function resetInputs() {
    setCpf("");
    setPassword("");
  }

  return (
    // usar <ScrollView></ScrollView>
    <View style={styles.formContext}>
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
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // login({ cpf: "14734570760", password: "sEnha123456##" });
            // login({ cpf: "76903821007", password: "sEnha123456##" });
            // login({ cpf: "91314128078", password: "sEnha123456##" });
            // login({ cpf: "76903821007", password: "sEnha123456##" });
            login({ cpf: desformatCpf(cpf), password });
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
