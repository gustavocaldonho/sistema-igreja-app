import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import ButtonBack from "../../auxiliary/ButtonBack";
import BoxLinearGradient from "../../screens/PageBase/BoxLinearGradient";
import styles from "./style";
import PersonalDataContainer from "./PersonalDataContainer";
import DizimoContainer from "./DizimoContainer";
import MortuaryContainer from "./MortuaryContainer";
import ModalUpdateDatasUser from "./PersonalDataContainer/ModalUpdateDatasUser";

export default function PerfilUser({ navigation, route }) {
  const { name, cpf, birthday, phone, community, password } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState("");

  const getImageProfile = async () => {
    try {
      //chamada da api
    } catch (error) {
      alert(error);
    }
  };

  const handleImagePicker = async () => {
    // const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    // if (!granted) {
    //   Alert.alert(
    //     "Permissão necessária",
    //     "Permita que o App acesse as imagens"
    //   );
    // } else {
    //   const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
    //     allowsEditing: true,
    //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //     base64: false,
    //     aspect: [4, 4],
    //     quality: 1,
    //   });

    //   if (!canceled) {
    //     const filename = assets[0].uri.substring(
    //       assets[0].uri.lastIndexOf("/") + 1,
    //       assets[0].uri.length
    //     );
    //     const extend = filename.split(".")[1];
    //     const formData = new FormData();
    //     formData.append(
    //       "file",
    //       JSON.parse(
    //         JSON.stringify({
    //           name: filename,
    //           uri: assets[0].uri,
    //           type: "image/" + extend,
    //         })
    //       )
    //     );

    //     try {
    //       //fazer o post para a api
    //       if (!result) {
    //         throw new Error(
    //           "Não foi possível enviar sua imagem. Por favor, tente novamente."
    //         );
    //       }
    //     } catch (error) {
    //       alert(error);
    //     }
    //   }
    // }

    let result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 4],
      allowsEditing: true,
      base64: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    // console.log("perfil User", name, cpf, birthday, phone, community, password);
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
                //source={require("../../../images/img-perfil-user.png")}
                source={image}
              />
              <View style={styles.boxIconCamera}>
                <TouchableOpacity onPress={handleImagePicker}>
                  <Icon name="camera" style={styles.iconCamera} />
                </TouchableOpacity>
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
    </View>
  );
}
