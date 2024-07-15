import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { AuthContext } from "../../../../contexts/auth";

const PersonalDataContainer = ({ sentUser, style, setModalVisible }) => {
  const { user, communityList } = useContext(AuthContext);

  function getCommunity(id) {
    for (let i = 0; i < communityList.length; i++) {
      if (communityList[i].id === id) {
        return [communityList[i].patron, " - ", communityList[i].location];
      }
    }
  }

  return (
    <View style={style}>
      <View style={styles.line}>
        <Text style={styles.textLabel}>CPF:</Text>
        <Text style={styles.textData}>{sentUser.cpf}</Text>
      </View>
      <View style={styles.line}>
        <Text style={styles.textLabel}>DATA DE NASCIMENTO:</Text>
        <Text style={styles.textData}>{sentUser.dataNasc}</Text>
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
          {getCommunity(sentUser.community)}
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
