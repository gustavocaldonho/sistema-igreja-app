import React, { useState } from "react";
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

export default function FormLogin({ userList }) {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const [login, setlogin] = useState(true);

  return (
    // usar <ScrollView></ScrollView>
    <View style={styles.formContext}>
      <Pressable style={styles.form} onPress={Keyboard.dismiss}>
        <Text style={styles.errorMessage}>
          {login ? "Credenciais Inválidas!" : ""}
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
            for (let i = 0; i < userList.length; i++) {
              if (
                userList[i].cpf === cpf &&
                userList[i].password === password
              ) {
                setlogin(true);
                break;
              }
            }

            console.log(logar);
          }}
        >
          <Text style={styles.textButtonLogin}>Entrar</Text>
        </TouchableOpacity>
      </Pressable>
    </View>
  );
}
