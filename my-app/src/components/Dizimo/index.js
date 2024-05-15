import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Dizimo({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.main}>
        <View style={styles.boxItem}>
          <View style={styles.boxTop}>
            <View style={styles.boxMonth}>
              <Text style={styles.textMonth}>MAIO</Text>
            </View>
            <View style={styles.boxPayButton}>
              <TouchableOpacity style={styles.payButton}>
                <Text style={styles.textPayButton}>Pagar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.boxObs}>
            <Text style={styles.textObs}>Será Liberado em 01/06/2024</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
