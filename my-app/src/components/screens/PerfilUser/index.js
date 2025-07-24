import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";
import ButtonBack from "../../auxiliary/ButtonBack";
import BoxLinearGradient from "../../screens/PageBase/BoxLinearGradient";
import styles from "./style";
import LoadingIndicator from "../../auxiliary/LoadingIndicator";
import OptionsImage from "../../auxiliary/ModalImage";
import ViewImage from "../../auxiliary/ModalImage/ViewImage";
import { AuthContext } from "../../../contexts/auth";
import { ConfirmModalContext } from "../../../contexts/modalConfirmContext";
import { ModalContext } from "../../../contexts/modalContext";
import DizimoContainer from "./DizimoContainer";
import PersonalDataContainer from "./PersonalDataContainer";
import ModalUpdateDatasUser from "./PersonalDataContainer/ModalUpdateDatasUser";
import { getImageProfile } from "../../auxiliary/ModalImage/functions";
import { disableUser } from "../../../services/user_api";

export default function PerfilUser({ navigation, route }) {
  const { user, signOut } = useContext(AuthContext);
  const { password } = route.params;
  const data = password ? user : route.params;
  const { name, cpf, birthday, phone, community } = data;
  const { imageProfile, setImageProfile } = useContext(AuthContext);
  const [imageAnyUser, setImageAnyUser] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [visibleOptionsImage, setVisibleOptionsImage] = useState(false);
  const [viewImageVisible, setViewImageVisible] = useState(false);

  const { modalConfirm } = useContext(ConfirmModalContext);
  const { showModal } = useContext(ModalContext); //modal alert

  const isCurrentUser = Boolean(password);

const deactivateAccount = () => {
  modalConfirm(
    "Desativar Conta",
    "Você tem certeza que deseja desativar sua conta?",
    async () => {
      try {
        const token = await AsyncStorage.getItem("AccessToken");
        const response = await disableUser(token);

        if(response.status === 204) {
          signOut();
          setTimeout(() => {
            showModal("Conta Desativada", "Sua conta foi desativada com sucesso.")
          }, 1000);
          console.log("Conta desativada com sucesso.");
        }
      } catch (error) {
        setTimeout(() => {
            showModal("Opa!", "Erro ao desativar a conta. Tente novamente mais tarde.");
          }, 1000);
      }
    }
  );
};

  useEffect(() => {
    if (!isCurrentUser) {
      getImageProfile("", cpf, setImageAnyUser, setLoadingImage);
    }
  }, [cpf, isCurrentUser]);

  const getProfileImageSource = () => {
    const imageBase64 = isCurrentUser ? imageProfile : imageAnyUser;
    return imageBase64
      ? { uri: `data:image/png;base64,${imageBase64}` }
      : require("../../../images/img-perfil-user.png");
  };

  return (
    <View style={styles.container}>
      <StatusBar color="#339DD7" />

      {modalVisible ? (
        <ModalUpdateDatasUser
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          user={{ name, cpf, phone, birthday, community, password }}
        />
      ) : (
        <BoxLinearGradient style={{ flex: 1 }}>
          <View style={styles.boxButtonBack}>
            <ButtonBack color={"#fff"} />
          </View>
          <View style={styles.boxTop}>
            <View style={[styles.boxImageProfile, styles.boxShadowLight]}>
              <Image
                style={styles.imageProfile}
                source={getProfileImageSource()}
              />
              {isCurrentUser && (
                <View style={styles.boxIconCamera}>
                  {!loadingImage ? (
                    <TouchableOpacity
                      onPress={() => setVisibleOptionsImage(true)}
                    >
                      <Icon name="camera" style={styles.iconCamera} />
                    </TouchableOpacity>
                  ) : (
                    <LoadingIndicator color="#339dd7" size="small" />
                  )}
                </View>
              )}
            </View>
          </View>
          <View style={styles.boxNameUser}>
            <Text style={styles.textNameUser}>{name}</Text>
          </View>

          <ScrollView>
            <PersonalDataContainer
              sentUser={{ name, cpf, birthday, phone, community, password }}
              style={[styles.boxInformationsUser, styles.boxShadow]}
              setModalVisible={setModalVisible}
            />

            <DizimoContainer
              userCpf={cpf}
              style={[styles.boxInformationsUser, styles.boxShadow]}
              styleTitleBox={styles.textTitleBox}
            />

            {user.cpf === cpf && (
              <TouchableOpacity style={styles.buttonDisable} activeOpacity={0.6} onPress={() => deactivateAccount() }>
                <Text style={styles.textDisable}>Desativar Conta</Text>
              </TouchableOpacity>
            )}

          </ScrollView>
        </BoxLinearGradient>
      )}

      <OptionsImage
        visibleOptionsImage={visibleOptionsImage}
        setVisibleOptionsImage={setVisibleOptionsImage}
        patron={null}
        cpf={cpf}
        image={imageProfile}
        setImage={setImageProfile}
        loadingImage={loadingImage}
        setLoadingImage={setLoadingImage}
        setViewImageVisible={setViewImageVisible}
      />

      <ViewImage
        visible={viewImageVisible}
        image={imageProfile}
        onClose={() => setViewImageVisible(false)}
      />
    </View>
  );
}
