import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import BoxLinearGradient from "../ScreenBase/BoxLinearGradient";

export default function Menu({ navigation }) {
  return (
    <BoxLinearGradient style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.boxTitleMenu}>
          <Text style={styles.textMenu}>MENU</Text>
        </View>
        <View style={styles.main}>
          <TouchableOpacity
            style={[styles.boxOption, styles.boxShadow]}
            onPress={() => navigation.navigate("Avisos")}
          >
            <Icon name="info" style={styles.icon} />
            <Text style={styles.textOption}>Avisos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.boxOption, styles.boxShadow]}
            onPress={() =>
              navigation.navigate("PerfilUser", {
                nameUser: "Gustavo Caldonho",
                cpf: "111.111.111-11",
              })
            }
          >
            <Icon name="user" style={styles.icon} />
            <Text style={styles.textOption}>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.boxOption, styles.boxShadow]}
            onPress={() => navigation.navigate("Dizimo")}
          >
            <Icon name="heart" style={styles.icon} />
            <Text style={styles.textOption}>Dízimo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.boxOption, styles.boxShadow]}
            onPress={() => navigation.navigate("CaixaMortuario")}
          >
            <FontAwesome5 name="cross" style={styles.icon} />
            <Text style={styles.textOption}>Caixa Mortuária</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.boxOption, styles.boxShadow]}
            onPress={() => navigation.navigate("Users", {})}
          >
            <Icon name="users" style={styles.icon} />
            <Text style={styles.textOption}>Usuários</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.boxOption, styles.boxShadow]}
            onPress={() => navigation.navigate("Comunidades")}
          >
            <FontAwesome5 name="church" style={styles.icon} />
            <Text style={styles.textOption}>Comunidades</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={[styles.boxOption, styles.boxShadow]}
            onPress={() =>
              navigation.navigate("PerfilCommunity", {
                patron: "São Geraldo Magela",
                location: "Sapucaia",
              })
            }
          >
            <FontAwesome5 name="church" style={styles.icon} />
            <Text style={styles.textOption}>Comunidade</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </BoxLinearGradient>
  );
}
