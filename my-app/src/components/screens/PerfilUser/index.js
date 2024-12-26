import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import ButtonBack from "../../auxiliary/ButtonBack";
import BoxLinearGradient from "../../screens/PageBase/BoxLinearGradient";
import styles from "./style";
import LoadingIndicator from "../../auxiliary/LoadingIndicator";
import OptionsImage from "../../auxiliary/ModalImage";
import ViewImage from "../../auxiliary/ModalImage/ViewImage";
import { AuthContext } from "../../../contexts/auth";
import DizimoContainer from "./DizimoContainer";
import PersonalDataContainer from "./PersonalDataContainer";
import ModalUpdateDatasUser from "./PersonalDataContainer/ModalUpdateDatasUser";
import { getImageProfile } from "../../auxiliary/ModalImage/functions";

export default function PerfilUser({ navigation, route }) {
  const { user } = useContext(AuthContext);
  const { password } = route.params;
  const data = password ? user : route.params;
  const { name, cpf, birthday, phone, community } = data;
  const { imageProfile, setImageProfile } = useContext(AuthContext);
  const [imageAnyUser, setImageAnyUser] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [visibleOptionsImage, setVisibleOptionsImage] = useState(false);
  const [viewImageVisible, setViewImageVisible] = useState(false);

  const isCurrentUser = Boolean(password);

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
              style={[styles.boxInformationsUser, styles.boxShadow]}
              styleTitleBox={styles.textTitleBox}
            />
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
