import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import BoxLinearGradient from "../ScreenBase/BoxLinearGradient";
import ItemMenu from "./ItemMenu";

export default function Menu({ navigation, route }) {
  const { setLogged } = route.params;

  return (
    <BoxLinearGradient style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.boxTitleMenu}>
          <Text style={styles.textMenu}>MENU</Text>
        </View>
        <View style={styles.main}>
          <ItemMenu
            screenName={"Avisos"}
            icon={"info"}
            onPress={() => navigation.navigate("Avisos")}
          />
          <ItemMenu
            screenName={"Perfil"}
            icon={"user"}
            onPress={() =>
              navigation.navigate("PerfilUser", {
                nameUser: "Gustavo Caldonho",
                cpf: "111.111.111-11",
              })
            }
          />
          <ItemMenu
            screenName={"Dízimo"}
            icon={"heart"}
            onPress={() => navigation.navigate("Dizimo")}
          />
          <ItemMenu
            screenName={"Caixa Mortuária"}
            icon={"cross"}
            onPress={() => navigation.navigate("CaixaMortuario")}
          />
          <ItemMenu
            screenName={"Usuários"}
            icon={"users"}
            onPress={() => navigation.navigate("Users", {})}
          />
          <ItemMenu
            screenName={"Comunidades"}
            icon={"church"}
            onPress={() => navigation.navigate("Comunidades")}
          />
          {/* <ItemMenu
            screenName={"Comunidade"}
            icon={"church"}
            onPress={() =>
              navigation.navigate("PerfilCommunity", {
                patron: "São Geraldo Magela",
                location: "Sapucaia",
              })
            }
          /> */}
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonSignOut}
          onPress={() => setLogged(false)}
        >
          <Text style={styles.textSignOut}>Sair</Text>
          <Icon name="sign-out" style={styles.iconSignOut} />
        </TouchableOpacity>
      </View>
    </BoxLinearGradient>
  );
}
