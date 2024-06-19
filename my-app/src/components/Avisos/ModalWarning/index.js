import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";

export default function ModalWarning({ modalVisible, setModalVisible }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.boxIconClose}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Icon name="close" style={styles.iconClose} />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.title}>Título</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite um título..."
              placeholderTextColor={"#88C6E7"}
            />
            <Text style={styles.title}>Mensagem</Text>
            <TextInput
              style={[styles.input, styles.areaInput]}
              placeholder="Digite uma mensagem..."
              placeholderTextColor={"#88C6E7"}
              multiline={true}
              numberOfLines={5}
            />
            <TouchableOpacity style={styles.boxButtonAdd} activeOpacity={0.7}>
              <Text style={styles.textButtonAdd}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
