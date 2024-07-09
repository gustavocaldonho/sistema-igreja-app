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
  const { signIn } = useContext(AuthContext);

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
            // retorna true ou false
            const error = signIn(cpf, password);
            setShowError(error);

            if (!error) {
              setCpf("");
              setPassword("");
            }
          }}
        >
          <Text style={styles.textButtonLogin}>Entrar</Text>
        </TouchableOpacity>
      </Pressable>
    </View>
  );
}
