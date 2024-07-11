import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import styles from "./style";
import BoxLinearGradient from "../../../PageBase/BoxLinearGradient";
import FormCadastroUser from "../../../Initial/FormCadastroUser";

const ModalUpdateDatasUser = ({ modalVisible, setModalVisible, user }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <BoxLinearGradient style={styles.container}>
          <Text style={styles.title}>ALTERAR DADOS</Text>
          <View style={styles.main}>
            <FormCadastroUser user={user} setModalVisible={setModalVisible} />
          </View>
        </BoxLinearGradient>
      </Modal>
    </View>
  );
};

export default ModalUpdateDatasUser;
