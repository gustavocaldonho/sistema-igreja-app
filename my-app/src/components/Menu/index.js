import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./style";

export default function Menu({ navigation }) {
  return (
    <View style={styles.boxMenu}>
      <View style={styles.boxLine}>
        <TouchableOpacity
          style={styles.boxOption}
          onPress={() => navigation.navigate("Avisos")}
        >
          <Text>Avisos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boxOption}
          onPress={() => navigation.navigate("PerfilUser")}
        >
          <Text>Perfil</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.boxLine}>
        <TouchableOpacity
          style={styles.boxOption}
          onPress={() => navigation.navigate("Dizimo")}
        >
          <Text>Dizimo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boxOption}
          onPress={() => navigation.navigate("CaixaMortuario")}
        >
          <Text>Caixa Mortuário</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.boxLine}>
        <TouchableOpacity
          style={styles.boxOption}
          onPress={() => navigation.navigate("Familias")}
        >
          <Text>Famílias</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boxOption}
          onPress={() => navigation.navigate("Comunidades")}
        >
          <Text>Comunidades</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
