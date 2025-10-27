import React, { useEffect, useState } from "react";
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import InputGroupValorDizimo from "../../../auxiliary/InputGroup/InputGroupValorDizimo";
import styles from "./style";

const ModalInputValueUnit = ({
  setModalInputUnitValueVisible,
  modalInputUnitValueVisible,
  inputRef,
  unitValue,
  setUnitValue,
}) => {
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      inputRef.current.focus();
    }, 200);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal animationType="fade" transparent={false} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Informe o novo valor:</Text>
              <InputGroupValorDizimo
                ref={inputRef}
                placeholder="0,00"
                value={unitValue}
                onChangeText={(text) => {
                  setUnitValue(text);
                }}
              />
              <TouchableOpacity
                style={styles.buttonSalvar}
                activeOpacity={0.6}
                onPress={() => {
                  setModalInputUnitValueVisible(!modalVisible);
                }}
              >
                <Text style={styles.textSalvar}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ModalInputValueUnit;
