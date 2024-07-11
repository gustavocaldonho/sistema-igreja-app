import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

const PersonalDataContainer = ({ user, style, setModalVisible }) => {
  return (
    <View style={style}>
      <View style={styles.line}>
        <Text style={styles.textLabel}>CPF:</Text>
        <Text style={styles.textData}>{user.cpf}</Text>
      </View>
      <View style={styles.line}>
        <Text style={styles.textLabel}>DATA DE NASCIMENTO:</Text>
        <Text style={styles.textData}>{user.dataNasc}</Text>
      </View>
      <View style={styles.line}>
        <Text style={[styles.textLabel, styles.textLabelEmail]}>EMAIL:</Text>
        <Text style={[styles.textData, styles.textDataEmail]}>
          {user.email}
        </Text>
      </View>
      <View style={styles.line}>
        <Text style={[styles.textLabel, styles.textLabelComunity]}>
          COMUNIDADE:
        </Text>
        <Text style={[styles.textData, styles.textDataComunity]}>
          {user.community}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonChangeDatas}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textChangeDatas}>ALTERAR DADOS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PersonalDataContainer;
