import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { AuthContext } from "../../../../contexts/auth";
import {
  formatDateBR,
  formatCpf,
} from "../../Initial/FormCadastroUser/functions";

const PersonalDataContainer = ({ sentUser, style, setModalVisible }) => {
  const { user } = useContext(AuthContext);

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
        <Text style={[styles.textLabel, styles.textLabelEmail]}>EMAIL:</Text>
        <Text style={[styles.textData, styles.textDataEmail]}>
          {sentUser.email}
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
      {user.cpf === sentUser.cpf ? (
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
