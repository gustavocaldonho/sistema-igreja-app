import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{
          width: "100%",
          height: "100%",
        }}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0.1 }}
        colors={["#f094c0", "#339dd7"]}
      >
        <View style={styles.boxBackgroundTop}>
          <Text style={styles.textMenu}>MENU</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.boxLine}>
            <TouchableOpacity
              style={styles.boxOption}
              onPress={() => navigation.navigate("Avisos")}
            >
              <Icon name="info" style={styles.icon} />
              <Text style={styles.textOption}>Avisos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.boxOption}
              onPress={() => navigation.navigate("PerfilUser")}
            >
              <Icon name="user" style={styles.icon} />
              <Text style={styles.textOption}>Perfil</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.boxLine}>
            <TouchableOpacity
              style={styles.boxOption}
              onPress={() => navigation.navigate("Dizimo")}
            >
              <Icon name="heart" style={styles.icon} />
              <Text style={styles.textOption}>Dízimo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.boxOption}
              onPress={() => navigation.navigate("CaixaMortuario")}
            >
              <FontAwesome5 name="cross" style={styles.icon} />
              <Text style={styles.textOption}>Caixa Mortuária</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.boxLine}>
            <TouchableOpacity
              style={styles.boxOption}
              onPress={() => navigation.navigate("Familias")}
            >
              <Icon name="users" style={styles.icon} />
              <Text style={styles.textOption}>Usuários</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.boxOption}
              onPress={() => navigation.navigate("Comunidades")}
            >
              <FontAwesome5 name="church" style={styles.icon} />
              <Text style={styles.textOption}>Comunidades</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
