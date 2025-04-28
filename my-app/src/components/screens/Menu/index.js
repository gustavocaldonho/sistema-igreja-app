import React, { useContext, useState } from "react";
import { StatusBar, View, Text } from "react-native";
import styles from "./style";
import BoxLinearGradient from "../../screens/PageBase/BoxLinearGradient";
import ItemMenu from "./ItemMenu";
import { AuthContext } from "../../../contexts/auth";
import ConfirmModalSignOut from "./ConfirmModalSignOut";
import Header from "./Header";
import Footer from "./Footer";

export default function Menu({ navigation }) {
  const { signOut, user } = useContext(AuthContext);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const handleConfirmSignOut = () => {
    setConfirmModalVisible(false);
    signOut();
  };

  return (
    <BoxLinearGradient style={{ flex: 1 }}>
      <StatusBar translucent />

      <View style={styles.container}>
        <Header setConfirmModalVisible={setConfirmModalVisible} />
        <View style={styles.main}>
          <View style={styles.boxTitleMenu}>
            <Text style={styles.textMenu}>Menu</Text>
          </View>
          <View style={styles.boxItemsMenu}>
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
              onPress={() =>
                navigation.navigate("Dizimo", {
                  cpf: user.cpf,
                })
              }
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
            {user.cpf === "13444338716" ||
            user.cpf === "08172150776" ||
            user.cpf === "14734570760" ? (
              <ItemMenu
                screenName={"Financeiro"}
                icon={"dollar"}
                onPress={() => navigation.navigate("Financeiro")}
              />
            ) : null}

            {user.cpf === "13444338716" ||
            user.cpf === "08172150776" ||
            user.cpf === "14734570760" ? (
              <ItemMenu
                screenName={"Limpeza"}
                icon={"broom"}
                onPress={() => navigation.navigate("Limpeza")}
              />
            ) : null}
          </View>
        </View>
        <Footer style={styles.footer} />
      </View>

      <ConfirmModalSignOut
        visible={confirmModalVisible}
        onConfirm={handleConfirmSignOut}
        onCancel={() => setConfirmModalVisible(false)}
      />
    </BoxLinearGradient>
  );
}
