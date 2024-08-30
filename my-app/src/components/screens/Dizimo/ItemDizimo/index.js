import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";

export default function ItemDizimo({
  month,
  year,
  status,
  setModalVisible,
  setItemClicked,
}) {
  return (
    <View style={styles.boxItem}>
      <View style={styles.boxTop}>
        <View style={styles.boxMonth}>
          <Text style={styles.textMonth}>{month}</Text>
        </View>
        <View style={styles.boxPayButton}>
          {status === "pago" ? (
            <View style={styles.boxIconCheck}>
              <Icon name="check" color={"#fff"} size={20} />
            </View>
          ) : (
            <TouchableOpacity
              style={styles.payButton}
              onPress={() => {
                setItemClicked({ month, year });
                setModalVisible(true);
              }}
            >
              <Text style={styles.textPayButton}>Pagar</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.boxBottom}>
        <View style={styles.boxObs}>
          <Text style={styles.textObs}>Disponivel ate 30/05/2024</Text>
          {/* <Text style={styles.textObs}>Será Liberado em 01/05/2024</Text> */}
          {/* <Text style={styles.textObs}>Disponivel para pagamento</Text> */}
        </View>
        <View style={styles.boxStatus}>
          <Text style={styles.textStatus}>Status</Text>
        </View>
      </View>
    </View>
  );
}
