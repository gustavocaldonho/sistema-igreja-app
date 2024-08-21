import { Alert } from "react-native";

export function msgCadastrySuccess(setRegistryEntry, cpf, senha) {
  Alert.alert(
    "Cadastro Concluído",
    `Seu Login de acesso é seu CPF ${cpf} e a senha ${senha}. Fique a vontade para trocar a senha depois pelo App. `,
    [
      {
        text: "OK",
        onPress: () => {
          setRegistryEntry(false);
        },
      },
    ]
  );
}

export function msgCadastryError() {
  Alert.alert(
    "Falha no Cadastro",
    `Verifique suas informações e tente novamente. `,
    [
      {
        text: "OK",
        onPress: () => {},
      },
    ]
  );
}

export function msgUpdateSuccess(setModalVisible, navigation) {
  Alert.alert(
    "Atualização Concluída",
    `Guarde bem seus dados e fique a vontade para atualizá-los quando quiser. `,
    [
      {
        text: "OK",
        onPress: () => {
          setModalVisible(false);
          navigation.goBack();
        },
      },
    ]
  );
}

export function msgUpdateError() {
  Alert.alert(
    "Falha na Atualização",
    `Verifique suas informações e tente novamente. `,
    [
      {
        text: "OK",
        onPress: () => {},
      },
    ]
  );
}
