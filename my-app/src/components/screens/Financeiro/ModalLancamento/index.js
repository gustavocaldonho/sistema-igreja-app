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
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { styles } from "./style";

export default function ModalLancamento({ visible, onClose }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Icon name="chevron-left" size={25} color={"#fff"} />
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

          <View style={styles.radioGroup}>
            <SegmentedControl
              values={["Gasto", "Ganho"]}
              selectedIndex={selectedIndex}
              onChange={(event) => {
                setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
              }}
              style={{ height: 40, marginVertical: 10 }}
              tintColor="#6200ea"
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.icon}>🏷️</Text>
            <TextInput style={styles.input} placeholder="Educação" />
          </View>

          <View style={styles.row}>
            <Text style={styles.icon}>📅</Text>
            <TextInput style={styles.input} placeholder="10/01/2020" />
          </View>

          <View style={styles.row}>
            <Text style={styles.icon}>🖊️</Text>
            <TextInput style={styles.input} placeholder="Curso de Inglês" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
