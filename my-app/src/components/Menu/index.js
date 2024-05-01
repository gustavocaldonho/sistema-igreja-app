import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Avisos from "../Avisos";

const Stack = createStackNavigator();

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
        <View style={styles.boxOption}>
          <Text>Perfil</Text>
        </View>
      </View>
      <View style={styles.boxLine}>
        <View style={styles.boxOption}>
          <Text>Dizimo</Text>
        </View>
        <View style={styles.boxOption}>
          <Text>Caixa Mortuário</Text>
        </View>
      </View>
      <View style={styles.boxLine}>
        <View style={styles.boxOption}>
          <Text>Famílias</Text>
        </View>
        <View style={styles.boxOption}>
          <Text>Comunidades</Text>
        </View>
      </View>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Avisos" component={Avisos} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
