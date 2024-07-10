import React, { useContext } from "react";
import { View, TouchableOpacity, StatusBar } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import BoxLinearGradient from "../ScreenBase/BoxLinearGradient";
import Title from "../Title";
import FormLogin from "../FormLogin";
import FormCadastroUser from "../FormCadastroUser";
import { AuthContext } from "../../contexts/auth";

export default function Initial() {
  const { registryEntry, setRegistryEntry } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#339DD7" />
      <BoxLinearGradient>
        {registryEntry == false ? (
          <View style={styles.main}>
            <Title textTitle="SEJA BEM-VINDO!!" />
            <View style={[styles.boxFormLogin, styles.boxShadow]}>
              <FormLogin />
            </View>
          </View>
        ) : (
          <View style={styles.main}>
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

            <Title textTitle="CADASTRO DE USUÁRIO" />
            <View style={[styles.boxFormCadastro, styles.boxShadow]}>
              <FormCadastroUser />
            </View>
          </View>
        )}
      </BoxLinearGradient>
    </View>
  );
}
