import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import {
  formatDateBR,
  formatCpf,
  formatPhone,
} from "../../Initial/FormCadastroUser/functions";

const PersonalDataContainer = ({ sentUser, style, setModalVisible }) => {
  return (
    <View style={style}>
      <View style={styles.line}>
        <Text style={styles.textLabel}>CPF:</Text>
        <Text style={styles.textData}>{formatCpf(sentUser.cpf)}</Text>
      </View>
      <View style={styles.line}>
        <Text style={styles.textLabel}>DATA DE NASCIMENTO:</Text>
        <Text style={styles.textData}>{formatDateBR(sentUser.birthday)}</Text>
      </View>
      <View style={styles.line}>
        <Text style={[styles.textLabel, styles.textLabelPhone]}>
          Nº CELULAR:
        </Text>
        <Text style={[styles.textData, styles.textDataPhone]}>
          {formatPhone(sentUser.phone)}
        </Text>
      </View>
      <View style={styles.line}>
        <Text style={[styles.textLabel, styles.textLabelComunity]}>
          COMUNIDADE:
        </Text>
        <Text style={[styles.textData, styles.textDataComunity]}>
          {sentUser.community}
        </Text>
      </View>
      {/* Só podem ser alterados os dados de perfil da conta do usuário logado  */}
      {sentUser.password !== undefined ? (
        <TouchableOpacity
          style={styles.buttonChangeDatas}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.textChangeDatas}>ALTERAR DADOS</Text>
        </TouchableOpacity>
      ) : (
        ""
      )}
    </View>
  );
};

export default PersonalDataContainer;
