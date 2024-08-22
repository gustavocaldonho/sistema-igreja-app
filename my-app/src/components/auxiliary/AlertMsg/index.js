import { Alert } from "react-native";

export default function AlertMsg(msgErro, error) {
  Alert.alert("Erro", `${msgErro} ${error ? error : ""}`, [
    {
      text: "OK",
      onPress: () => {},
    },
  ]);
}
