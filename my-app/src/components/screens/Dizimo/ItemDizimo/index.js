import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import { translateMonth } from "./functions";

export default function ItemDizimo({
  month,
  year,
  status,
  expiresDate,
  setModalVisible,
  setItemClicked,
}) {
  return (
    <View style={styles.boxItem}>
      <View style={styles.boxTop}>
        <View style={styles.boxMonth}>
          <Text style={styles.textMonth}>{translateMonth(month)[1]}</Text>
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
                setItemClicked({ month: translateMonth(month)[0], year });
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
          <Text style={styles.textObs}>Disponível até {expiresDate}</Text>
          {/* <Text style={styles.textObs}>Será Liberado em 01/05/2024</Text> */}
          {/* <Text style={styles.textObs}>Disponivel para pagamento</Text> */}
        </View>
        <View style={styles.boxStatus}>
          <Text style={styles.textStatus}>{status}</Text>
        </View>
      </View>
    </View>
  );
}
