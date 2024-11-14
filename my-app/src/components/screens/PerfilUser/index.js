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

import PersonalDataContainer from "./PersonalDataContainer";
import DizimoContainer from "./DizimoContainer";
import MortuaryContainer from "./MortuaryContainer";
import ModalUpdateDatasUser from "./PersonalDataContainer/ModalUpdateDatasUser";

export default function PerfilUser({ navigation, route }) {
  const { name, cpf, birthday, phone, community, password } = route.params;
  const { imageProfile, setImageProfile } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [visibleOptionsImage, setVisibleOptionsImage] = useState(false);
  const [viewImageVisible, setViewImageVisible] = useState(false);

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
                  imageProfile !== ""
                    ? { uri: `data:image/png;base64,${imageProfile}` }
                    : require("../../../images/img-perfil-user.png")
                }
              />
              {password ? (
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
              ) : null}
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
