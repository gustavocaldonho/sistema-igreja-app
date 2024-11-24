import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
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
          setModalVisible(!modalVisible);
        }}
      >
        <BoxLinearGradient style={styles.container}>
          <TouchableOpacity
            style={styles.buttonClose}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Icon name={"chevron-left"} style={styles.iconClose} />
          </TouchableOpacity>
          <Text style={styles.title}>ALTERAR DADOS</Text>
          <View style={styles.main}>
            <FormCadastroUser
              user={user}
              setModalVisible={setModalVisible}
              isModalUpdateDatasUser={true}
            />
          </View>
        </BoxLinearGradient>
      </Modal>
    </View>
  );
};

export default ModalUpdateDatasUser;
