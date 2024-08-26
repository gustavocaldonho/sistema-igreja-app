import React from "react";
import { Text, Pressable } from "react-native";
import styles from "./style";
import ModalBase from "../../../../auxiliary/ModalBase";

export default function ModalCompleteRegistry(props) {
  return (
    <ModalBase>
      <Text style={styles.textTitle}>Cadastro Concluído!</Text>
      <Text style={styles.modalText}>Seu Login de acesso é:</Text>

      <Text style={styles.subTitleHighlight}>CPF</Text>
      <Text style={styles.textHighlight}>{props.cpf}</Text>
      <Text style={styles.subTitleHighlight}>SENHA</Text>
      <Text style={styles.textHighlight}>{props.password}</Text>

      <Text style={styles.modalText}>
        Fique a vontade para alterar seus dados ao acessar o App.
      </Text>
      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => {
          props.setModalVisible(!props.modalVisible);
          props.setRegistryEntry(false);
        }}
      >
        <Text style={styles.textButton}>OK</Text>
      </Pressable>
    </ModalBase>
  );
}
