import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./style";
import ModalPagamentoDizimo from "./modalPagamento/";
import ScreenBase from "../ScreenBase";

export default function Dizimo({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ScreenBase colorStatusBar={"#fff"}>
          <View style={styles.main}>
            {modalVisible ? (
              <ModalPagamentoDizimo
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
              />
            ) : (
              <View />
            )}

            <View style={styles.boxItem}>
              <View style={styles.boxTop}>
                <View style={styles.boxMonth}>
                  <Text style={styles.textMonth}>MAIO</Text>
                </View>
                <View style={styles.boxPayButton}>
                  <TouchableOpacity
                    style={styles.payButton}
                    onPress={() => setModalVisible(true)}
                  >
                    <Text style={styles.textPayButton}>Pagar</Text>
                  </TouchableOpacity>
                  {/* <View style={styles.boxIconCheck}>
                <Icon name="check" color={"#fff"} size={20} />
              </View> */}
                </View>
              </View>
              <View style={styles.boxBottom}>
                <View style={styles.boxObs}>
                  <Text style={styles.textObs}>
                    Será Liberado em 01/05/2024
                  </Text>
                </View>
                <View style={styles.boxStatus}>
                  <Text style={styles.textStatus}>Status</Text>
                </View>
              </View>
            </View>
          </View>
        </ScreenBase>
      </View>
    </View>
  );
}
