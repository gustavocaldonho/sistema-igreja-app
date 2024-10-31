import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import ButtonBack from "../../auxiliary/ButtonBack";
import BoxLinearGradient from "../../screens/PageBase/BoxLinearGradient";
import styles from "./style";
import LoadingIndicator from "../../auxiliary/LoadingIndicator";
import OptionsImage from "./ModalImage";
import ViewImage from "./ModalImage/ModalViewImage/ViewImage";
import { getImageProfile } from "./ModalImage/functions";

import PersonalDataContainer from "./PersonalDataContainer";
import DizimoContainer from "./DizimoContainer";
import MortuaryContainer from "./MortuaryContainer";
import ModalUpdateDatasUser from "./PersonalDataContainer/ModalUpdateDatasUser";

export default function PerfilUser({ navigation, route }) {
  const { name, cpf, birthday, phone, community, password } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState("");
  const [loadingImage, setLoadingImage] = useState(true);
  const [visibleOptionsImage, setVisibleOptionsImage] = useState(false);
  const [viewImageVisible, setViewImageVisible] = useState(false);

  useEffect(() => {
    getImageProfile(cpf, setImage, setLoadingImage);
  }, []);

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
                source={
                  image !== ""
                    ? { uri: `data:image/png;base64,${image}` }
                    : require("../../../images/img-perfil-user.png")
                }
              />
              <View style={styles.boxIconCamera}>
                {!loadingImage ? (
                  <TouchableOpacity
                    onPress={() => {
                      setVisibleOptionsImage(true);
                    }}
                  >
                    <Icon name="camera" style={styles.iconCamera} />
                  </TouchableOpacity>
                ) : (
                  <LoadingIndicator color="#339dd7" size="small" />
                )}
              </View>
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

            {/* <DizimoContainer
              style={[styles.boxInformationsUser, styles.boxShadow]}
              styleTitleBox={styles.textTitleBox}
            /> */}

            {/* <MortuaryContainer
              years={{}}
              style={[styles.boxInformationsUser, styles.boxShadow]}
              styleTitleBox={styles.textTitleBox}
            /> */}

            {/* <TouchableOpacity style={styles.buttonDisable}>
              <Text style={styles.textDisable}>DESATIVAR CONTA</Text>
            </TouchableOpacity> */}
          </ScrollView>
        </BoxLinearGradient>
      )}

      <OptionsImage
        visibleOptionsImage={visibleOptionsImage}
        setVisibleOptionsImage={setVisibleOptionsImage}
        cpf={cpf}
        image={image}
        setImage={setImage}
        loadingImage={loadingImage}
        setLoadingImage={setLoadingImage}
        setViewImageVisible={setViewImageVisible}
      />

      <ViewImage
        visible={viewImageVisible}
        image={image}
        onClose={() => setViewImageVisible(false)}
      />
    </View>
  );
}
