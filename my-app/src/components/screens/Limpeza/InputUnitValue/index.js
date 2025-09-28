import React, { forwardRef } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Platform } from "react-native";

const InputUnitValue = forwardRef(
  ({ placeholder, value, onChangeText, style }, ref) => {
    const formatMoney = (input) => {
      const numericValue = input.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
      // Divide o valor por 100 para considerar os centavos
      const formattedValue = (numericValue / 100)
        .toFixed(2) // Sempre mantém duas casas decimais
        .replace(".", ",") // Substitui o ponto decimal por vírgula
        .replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Adiciona pontos como separadores de milhar

      return formattedValue;
    };

    const handleChange = (text) => {
      const formattedText = formatMoney(text);
      onChangeText(formattedText);
    };

    return (
      <View style={[style, styles.container]}>
        <View>
          <Text style={styles.iconMoney}>R$</Text>
        </View>
        <TextInput
          ref={ref}
          style={styles.input}
          placeholder={placeholder}
          keyboardType="numeric"
          value={value}
          maxLength={6}
          placeholderTextColor="#ccc"
          onChangeText={handleChange}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
container: {
  flex: 1,
  width: "50%",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
},
iconMoney: {
  fontSize: 20,
  marginRight: 5,
  fontWeight: "700",
  color: "#287BBF",
},
input: {
  fontSize: 20,
  fontWeight: "700",
  color: "#287BBF",
},
});

export default InputUnitValue;
