import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Picker } from "@react-native-picker/picker";
import styles from './style';

const ModalSelectCommunityIOS = ({visible, setVisible, onValueChange, selectedValue, options}) => {
//   const [modalVisible, setModalVisible] = useState(true);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            // setModalVisible(!visible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Selecione sua Comunidade: </Text>

                <View style={styles.viewPicker}>
                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={onValueChange}
                        style={styles.labelPicker}>
                        {options.map((option, index) => (
                            <Picker.Item
                            style={[styles.labelPicker]}
                            key={index}
                            label={option.label}
                            value={option.value}
                            />
                        ))}
                    </Picker>
                </View>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setVisible(!visible)}>
                <Text style={styles.textStyle}>Selecionar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ModalSelectCommunityIOS;