import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Menu({ navigation }) {
  return (
    <View style={styles.boxMenu}>
      <View style={styles.boxLine}>
        <View
          style={styles.boxOption}
          onPress={() => navigation.navigate("Avisos")}
        >
          <Text>Avisos</Text>
        </View>
        <View
          style={styles.boxOption}
          onPress={() => navigation.navigate("PerfilUser")}
        >
          <Text>Perfil</Text>
        </View>
      </View>
      <View style={styles.boxLine}>
        <View
          style={styles.boxOption}
          onPress={() => navigation.navigate("Dizimo")}
        >
          <Text>Dizimo</Text>
        </View>
        <View
          style={styles.boxOption}
          onPress={() => navigation.navigate("CaixaMortuario")}
        >
          <Text>Caixa Mortuário</Text>
        </View>
      </View>
      <View style={styles.boxLine}>
        <View
          style={styles.boxOption}
          onPress={() => navigation.navigate("Familias")}
        >
          <Text>Famílias</Text>
        </View>
        <View
          style={styles.boxOption}
          onPress={() => navigation.navigate("Comunidades")}
        >
          <Text>Comunidades</Text>
        </View>
      </View>
    </View>
  );
}
