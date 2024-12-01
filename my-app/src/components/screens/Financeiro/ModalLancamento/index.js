import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./style";
import RadioButtonType from "./RadioButtonType";

export default function ModalLancamento({ visible, onClose }) {
  const [selectedRadio, setSelectedRadio] = useState("entry");

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <StatusBar
        translucent={true}
        barStyle="light-content"
        backgroundColor={"#339dd7"}
      />
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Icon name="times" style={styles.closeButton} />
          </TouchableOpacity>
          <Text style={styles.title}>Lançamento</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.boxAmount}>
            <Text style={styles.label}>R$</Text>
            <TextInput
              style={styles.amountInput}
              placeholder="0,00"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.row}>
            <RadioButtonType
              selectedRadio={selectedRadio}
              setSelectedRadio={setSelectedRadio}
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.emoji}>🏷️</Text>
            <TextInput style={styles.input} placeholder="Título" multiline />
          </View>

          <View style={styles.row}>
            <Text style={styles.emoji}>📅</Text>
            <TextInput style={styles.input} placeholder="00/00/0000" />
          </View>

          <View style={styles.row}>
            <Text style={styles.emoji}>📝</Text>
            <TextInput style={styles.input} placeholder="Descrição" multiline />
          </View>

          <View style={[styles.row, styles.rowButton]}>
            <TouchableOpacity
              onPress={onClose}
              style={[styles.button, styles.delete]}
            >
              <Icon name="trash" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Excluir</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onClose}
              style={[styles.button, styles.save]}
            >
              <Icon name="save" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
