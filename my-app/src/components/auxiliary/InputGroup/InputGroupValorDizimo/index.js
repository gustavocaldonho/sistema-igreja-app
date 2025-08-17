import React, { forwardRef } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const InputGroupValorDizimo = forwardRef(
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
          maxLength={12}
          placeholderTextColor="#ccc"
          onChangeText={handleChange}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: "70%",
    marginTop: 10,
    alignSelf: "center",
    flexDirection: "row",
    paddingBottom: 5,
    justifyContent: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 2,
  },
  iconMoney: {
    fontSize: 25,
    marginRight: 10,
    fontWeight: "700",
    margin: 0,
    paddingVertical: 10,
  },
  input: {
    minWidth: 50,
    fontSize: 25,
    fontWeight: "700",
    padding: 0,
  },
});

export default InputGroupValorDizimo;
