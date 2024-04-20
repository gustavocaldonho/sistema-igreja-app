import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Vibration,
  Keyboard,
} from "react-native";
import styles from "./style";

import MaskInput from "react-native-mask-input";

const CPF_MASK = [
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];

export default function FormLogin() {
  const [cpf, setCpf] = useState("");

  return (
    <View style={styles.formContext}>
      <Pressable style={styles.form}>
        <Text style={styles.formLabel}>CPF</Text>
        <Text style={styles.errorMessage}></Text>
        <MaskInput
          style={styles.input}
          placeholder="000.000.000-00"
          keyboardType="numeric"
          maxLength={14}
          value={cpf}
          onChangeText={setCpf}
          mask={(text) => {
            if (text.replace(/\D+/g, "").length <= 11) {
              return CPF_MASK;
            } else {
            }
          }}
        ></MaskInput>

        <Text style={styles.formLabel}>Senha</Text>
        <Text style={styles.errorMessage}></Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
        ></TextInput>

        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.textButtonLogin}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.textButtonLogin}>Cadastrar</Text>
        </TouchableOpacity>
      </Pressable>
    </View>
  );
}
