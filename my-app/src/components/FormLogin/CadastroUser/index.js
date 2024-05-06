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

// import InputGroupName from "./InputGroupName";
// import InputGroupCpf from "../InputGroupCpf";
// import InputGroupEmail from "./InputGroupEmail";
// import InputGroupDN from "./InputGroupDN";

export default function CadastroUser() {
  const [cpf, setCpf] = useState("");

  return (
    // usar <ScrollView></ScrollView>
    <View style={styles.formContext}>
      <Pressable style={styles.form} onPress={Keyboard.dismiss}>
        {/* <Text style={styles.errorMessage}></Text>
        <InputGroupName
          iconName="user"
          style={styles.input}
          placeholder="Digite seu Nome"
        />
        <Text style={styles.errorMessage}></Text>
        <InputGroupCpf
          iconName="user"
          placeholder="000.000.000-00"
          value={cpf}
          onChangeText={setCpf}
          style={styles.input}
        />
        <Text style={styles.errorMessage}></Text>
        <InputGroupEmail
          iconName="key"
          style={styles.input}
          placeholder="Digite seu E-mail"
        />
        <Text style={styles.errorMessage}></Text>
        <InputGroupDN
          iconName="key"
          style={styles.input}
          placeholder="Digite seu Nome"
        /> */}

        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.textButtonLogin}>Cadastrar</Text>
        </TouchableOpacity>
      </Pressable>
    </View>
  );
}
