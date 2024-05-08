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

import InputGroupName from "../InputGroup/InputGroupName";
import InputGroupCpf from "../InputGroup/InputGroupCpf";
import InputGroupEmail from "../InputGroup/InputGroupEmail";
import InputGroupDN from "../InputGroup/InputGroupDN";
import InputGroupSelect from "../InputGroup/InputGroupSelect";

export default function FormCadastroUser() {
  const [cpf, setCpf] = useState("");
  const [dn, setDN] = useState("");
  const [community, setCommunity] = useState("");

  return (
    // usar <ScrollView></ScrollView>
    <View style={styles.formContext}>
      <Pressable style={styles.form} onPress={Keyboard.dismiss}>
        <Text style={styles.errorMessage}></Text>
        <InputGroupName
          iconName="user"
          placeholder="Digite seu Nome"
          style={styles.input}
        />

        <Text style={styles.errorMessage}></Text>
        <InputGroupCpf
          iconName="id-card"
          placeholder="000.000.000-00"
          style={styles.input}
          value={cpf}
          onChangeText={setCpf}
        />

        <Text style={styles.errorMessage}></Text>
        <InputGroupEmail
          iconName="envelope"
          placeholder="Digite seu E-mail"
          style={styles.input}
        />

        <Text style={styles.errorMessage}></Text>
        <InputGroupDN
          iconName="birthday-cake"
          placeholder="DD/MM/AAAA"
          style={styles.input}
          value={dn}
          onChangeText={setDN}
        />

        <Text style={styles.errorMessage}></Text>
        <InputGroupSelect
          iconName="church"
          value={community}
          options={[
            { label: "Sua Comunidade", value: "" },
            { label: "Comunidade A", value: "a" },
            { label: "Comunidade B", value: "b" },
            { label: "Comunidade C", value: "c" },
          ]}
        />

        <TouchableOpacity style={styles.buttonCadastro}>
          <Text style={styles.textButtonCadastro}>Cadastrar</Text>
        </TouchableOpacity>
      </Pressable>
    </View>
  );
}
