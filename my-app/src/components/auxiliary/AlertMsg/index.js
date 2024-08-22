import { Alert } from "react-native";

export default function AlertMsg(msgErro, error = "Falha na requisição.") {
  Alert.alert("Erro", `${msgErro} ${error}`, [
    {
      text: "OK",
      onPress: () => {},
    },
  ]);
}
