import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import {
  translateMonth,
  getStatus,
  getStatusIcon,
  getFormatDate,
  formatInReal,
  getExpiresDate,
} from "../functions";

export default function ItemDizimo({
  month,
  year,
  status,
  paidIn,
  valuePaid,
  setModalVisible,
  setItemClicked,
}) {
  return (
    <View style={styles.boxItem}>
      <View style={styles.boxTop}>
        <View style={styles.boxMonth}>
          <Text style={styles.textMonth}>{translateMonth(month)[0]}</Text>
        </View>
        <View style={styles.boxPayButton}>
          {status !== "active" ? (
            <View style={styles.boxIconStatus}>
              <Icon name={getStatusIcon(status)} style={styles.icon} />
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
          {status === "paid" ? (
            <Text style={styles.textObs}>Pago em {getFormatDate(paidIn)}</Text>
          ) : (
            <Text style={styles.textObs}>
              Disponível até {getExpiresDate(month)}
            </Text>
          )}
        </View>
        <View style={styles.boxStatus}>
          {status === "paid" ? (
            <Text style={styles.textStatus}>{formatInReal(valuePaid)}</Text>
          ) : (
            <Text style={styles.textStatus}>{getStatus(status)}</Text>
          )}
        </View>
      </View>
    </View>
  );
}
