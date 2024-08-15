import React from "react";
import { Modal, View, Text, TouchableOpacity, Image } from "react-native";
import { BlurView } from "expo-blur";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import FormDefault from "./FormDefault";
import FormConfirmation from "./FormConfirmation";

export default function ModalAdvisor({
  patron,
  advisorModalVisible,
  setAdvisorModalVisible,
  itemAdvisorClicked,
  setItemAdvisorClicked,
  formModalAdvisorDefaultVisible,
}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={advisorModalVisible}
      onRequestClose={() => {
        setModalVisible(!advisorModalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <BlurView style={styles.absolute} tint="dark" intensity={100} />
        <View style={styles.modalView}>
          <View style={styles.boxIconClose}>
            <TouchableOpacity
              onPress={() => {
                setAdvisorModalVisible(!advisorModalVisible);
              }}
            >
              <Icon name="close" style={styles.iconClose} />
            </TouchableOpacity>
          </View>
          {formModalAdvisorDefaultVisible ? (
            <FormDefault
              patron={patron}
              setAdvisorModalVisible={setAdvisorModalVisible}
              advisorModalVisible={advisorModalVisible}
              itemAdvisorClicked={itemAdvisorClicked}
            />
          ) : (
            <FormConfirmation
              itemAdvisorClicked={itemAdvisorClicked}
              setItemAdvisorClicked={setItemAdvisorClicked}
              setAdvisorModalVisible={setAdvisorModalVisible}
              advisorModalVisible={advisorModalVisible}
            />
          )}
        </View>
      </View>
    </Modal>
  );
}
