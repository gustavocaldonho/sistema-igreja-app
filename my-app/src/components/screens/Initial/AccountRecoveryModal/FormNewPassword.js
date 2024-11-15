import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import modalStyles from "./style";

export default function FormNewPassword({ cancel, newPassword }) {
  return (
    <View style={[modalStyles.modalContent, { gap: 20 }]}>
      <Text style={styles.title}>Código confirmado com sucesso!</Text>
      <Text style={styles.modalSubText}>Sua nova senha temporária é:</Text>
      <Text style={styles.textNewPassword}>{newPassword}</Text>
      <Text style={styles.modalSubText}>
        Entre no app e altere-a o mais rápido possível!
      </Text>
      <TouchableOpacity style={modalStyles.button} onPress={cancel}>
        <Text style={[modalStyles.buttonText, modalStyles.textConfirm]}>
          Ir para Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    fontWeight: "800",
  },
  modalSubText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
  textNewPassword: {
    fontSize: 20,
    color: "#f094c0",
    fontWeight: "900",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
  },
});
