import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Vibration,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import MaskInput from "react-native-mask-input";

import InputGroupCpf from "./InputGroupCpf";

import styles from "./style";

export default function FormLogin() {
  const [cpf, setCpf] = useState("");

  return (
    // usar <ScrollView></ScrollView>
    <View style={styles.formContext}>
      <Pressable style={styles.form} onPress={Keyboard.dismiss}>
        <InputGroupCpf
          iconName="user"
          placeholder="000.000.000-00"
          value={cpf}
          onChangeText={setCpf}
          style={styles.inputGroup}
        />

        <Text style={styles.errorMessage}></Text>

        {/* <Text style={styles.formLabel}>Senha</Text> */}
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
        ></TextInput>
        <Text style={styles.errorMessage}></Text>

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
