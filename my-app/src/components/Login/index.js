import React, { useContext } from "react";
import { Text, View, TouchableOpacity, StatusBar } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import BoxLinearGradient from "../ScreenBase/BoxLinearGradient";
import Title from "../Title";
import FormLogin from "../FormLogin";
import FormCadastroUser from "../FormCadastroUser";
import { AuthContext } from "../../contexts/auth";

export default function Login() {
  const { registryEntry, setRegistryEntry } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#339DD7" />

      <BoxLinearGradient>
        <View style={styles.main}>
          <View style={styles.boxBackgroundTop}>
            {registryEntry == false ? (
              <Title textTitle={"SEJA BEM-VINDO!!"} />
            ) : (
              <Title textTitle={"CADASTRO DE USUÁRIO"} />
            )}
          </View>
          {registryEntry == false ? (
            <View style={styles.boxFormLogin}>
              <FormLogin />
              <TouchableOpacity
                style={styles.buttonAccount}
                onPress={() => {
                  setRegistryEntry(true);
                }}
              >
                <Text style={styles.textButtonAccount}>Criar Conta</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.boxFormCadastro}>{<FormCadastroUser />}</View>
          )}
          {registryEntry ? (
            <View style={styles.buttonBack}>
              <TouchableOpacity
                style={styles.textButtonBack}
                onPress={() => {
                  setRegistryEntry(false);
                }}
              >
                <Icon name={"chevron-left"} size={25} color="#ffffff" />
              </TouchableOpacity>
            </View>
          ) : (
            ""
          )}
        </View>
      </BoxLinearGradient>
    </View>
  );
}
