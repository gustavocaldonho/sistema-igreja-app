import React, { useContext } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { AuthContext } from "../../../../contexts/auth";
import styles from "./style";

export default function Header({ setConfirmModalVisible }) {
  const { user, imageProfile } = useContext(AuthContext);

  const formatName = (user) => {
    return user.name.split(" ")[0] + " " + user.name.split(" ")[1];
  };

  return (
    <View style={styles.container}>
      <View style={styles.lineHeader}>
        <View style={styles.boxUserProfile}>
          <View style={[styles.boxImageProfile, styles.boxShadowLight]}>
            <Image
              style={styles.imageProfile}
              source={
                imageProfile !== ""
                  ? { uri: `data:image/png;base64,${imageProfile}` }
                  : require("../../../../images/img-perfil-user.png")
              }
            />
          </View>
          <View style={styles.boxInfoUser}>
            <Text style={styles.textNameUser}>
              {user.name ? formatName(user) : ""}
            </Text>
            <Text style={styles.textPatron}>
              {user.community ? user.community : ""}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.buttonSignOut}
          onPress={() => setConfirmModalVisible(true)}
        >
          <Text style={styles.textSignOut}>Sair</Text>
          <Icon name="sign-out" style={styles.iconSignOut} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
