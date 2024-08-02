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

import { AuthContext } from "../../../../contexts/auth";
// import user_api from "../../../../services/user_api";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FormLogin() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const { signIn, setRegistryEntry } = useContext(AuthContext);

  // function logar() {
  // login_user({
  //   cpf: "69594471000",
  //   password: "#Aldkl1234567",
  // });
  // login_user({
  //   cpf: cpf,
  //   password: password,
  // })
  //   .then((result) => {
  //     console.log(result);
  //     // if (result.status == 200) {
  //     // AsyncStorage.setItem("AccessToken", result.data);
  //     // }
  //   })
  //   .catch((err) => {
  //     console.log("Erro: ", err);
  //   });
  // user_api({});
  // }

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
            // retorna true ou false
            const error = signIn(cpf, password);
            setShowError(error);

            if (!error) {
              setCpf("");
              setPassword("");
            }

            // logar();
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
