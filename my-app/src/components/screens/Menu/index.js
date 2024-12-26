import React, { useContext, useState } from "react";
import { StatusBar, View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import BoxLinearGradient from "../../screens/PageBase/BoxLinearGradient";
import ItemMenu from "./ItemMenu";
import { AuthContext } from "../../../contexts/auth";
import ConfirmModalSignOut from "./ConfirmModalSignOut";
import Header from "./Header";

export default function Menu({ navigation }) {
  const { signOut, user } = useContext(AuthContext);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const handleConfirmSignOut = () => {
    setConfirmModalVisible(false);
    signOut();
  };

  return (
    <BoxLinearGradient style={styles.container}>
      <StatusBar translucent />
      <View style={styles.innerContainer}>
        <Header setConfirmModalVisible={setConfirmModalVisible} />
        <View style={styles.main}>
          <View style={styles.boxTitleMenu}>
            <Text style={styles.textMenu}>Menu</Text>
          </View>
          <ItemMenu
            screenName={"Perfil"}
            icon={"user"}
            onPress={() =>
              navigation.navigate("PerfilUser", {
                name: user.name,
                cpf: user.cpf,
                birthday: user.birthday,
                phone: user.phone,
                community: user.community,
                password: user.password,
              })
            }
          />
          {user.position === "council member" ? (
            <ItemMenu
              screenName={"Usuários"}
              icon={"users"}
              onPress={() => navigation.navigate("Users", {})}
            />
          ) : null}
          <ItemMenu
            screenName={"Avisos"}
            icon={"info"}
            onPress={() => navigation.navigate("Avisos")}
          />
          <ItemMenu
            screenName={"Dízimo"}
            icon={"heart"}
            onPress={() => navigation.navigate("Dizimo")}
          />

          {user.position === "parish leader" ? (
            <ItemMenu
              screenName={"Comunidades"}
              icon={"church"}
              onPress={() => navigation.navigate("Comunidades")}
            />
          ) : (
            <ItemMenu
              screenName={"Comunidade"}
              icon={"church"}
              onPress={() =>
                navigation.navigate("PerfilCommunity", {
                  patron: user.community,
                })
              }
            />
          )}
          <ItemMenu
            screenName={"Financeiro"}
            icon={"dollar"}
            onPress={() => navigation.navigate("Financeiro")}
          />
        </View>
        <View style={styles.footer}>
          <Image
            source={require("../../../images/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.footerTitle}>Defagus Systems</Text>
          <View style={styles.footerSubTitle}>
            <Icon
              name="copyright"
              color={"#fff"}
              style={styles.iconCopyright}
            />
            <Text style={styles.subTitle}>Todos os Direitos Reservados</Text>
          </View>
        </View>
      </View>

      <ConfirmModalSignOut
        visible={confirmModalVisible}
        onConfirm={handleConfirmSignOut}
        onCancel={() => setConfirmModalVisible(false)}
      />
    </BoxLinearGradient>
  );
}
