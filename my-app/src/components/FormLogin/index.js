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
} from "react-native";
import styles from "./style";
import InputGroupCpf from "../InputGroup/InputGroupCpf";
import InputGroupPassword from "../InputGroup/InputGroupPassword";

import { AuthContext } from "../../contexts/auth";

export default function FormLogin() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const { userList, setLogged, setUserLogged } = useContext(AuthContext);

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
          style={styles.buttonLogin}
          onPress={() => {
            let logar = false;

            // Criar uma função para envelopar o loop abaixo
            for (let i = 0; i < userList.length; i++) {
              if (
                userList[i].cpf === cpf &&
                userList[i].password === password
              ) {
                logar = true;
                break;
              }
            }
            setShowError(!logar);
            setLogged(logar);
            logar ? setUserLogged(cpf) : "";
            console.log("Logar: ", logar);
          }}
        >
          <Text style={styles.textButtonLogin}>Entrar</Text>
        </TouchableOpacity>
      </Pressable>
    </View>
  );
}
