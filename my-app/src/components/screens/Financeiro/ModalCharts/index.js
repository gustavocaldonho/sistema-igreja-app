import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./style";

export default function ModalCharts({ visible, onClose }) {
  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#339dd7"
      />
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Icon name="times" style={styles.closeButton} />
          </TouchableOpacity>
          <Text style={styles.title}>Gráficos</Text>
        </View>

        <ScrollView style={styles.content}></ScrollView>
      </View>
    </Modal>
  );
}
