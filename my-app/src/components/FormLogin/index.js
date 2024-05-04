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
import InputGroupCpf from "./InputGroupCpf";
import InputGroupPassword from "./InputGroupPassword";

export default function FormLogin() {
  const [cpf, setCpf] = useState("");

  return (
    // usar <ScrollView></ScrollView>
    <View style={styles.formContext}>
      <Pressable style={styles.form} onPress={Keyboard.dismiss}>
        <Text style={styles.errorMessage}></Text>
        <InputGroupCpf
          iconName="user"
          placeholder="000.000.000-00"
          value={cpf}
          onChangeText={setCpf}
          style={styles.inputGroup}
        />

        <Text style={styles.errorMessage}></Text>
        <InputGroupPassword
          iconName="key"
          style={styles.input}
          placeholder="Digite sua senha"
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

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
