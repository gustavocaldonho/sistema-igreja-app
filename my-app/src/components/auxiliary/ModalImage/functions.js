import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AlertMsg from "../../../auxiliary/AlertMsg";
import {
  setImageUser,
  getImageUser,
  deleteImageUser,
} from "../../../../services/user_api";
import {
  setImageCommunity,
  getImageCommunity,
  deleteImageCommunity,
} from "../../../../services/community_api";

export const getImageProfile = async (
  patron,
  cpf,
  setImage,
  setLoadingImage
) => {
  try {
    const token = await AsyncStorage.getItem("AccessToken");
    let result = "";

    if (patron) {
      result = await getImageCommunity(token, patron);
    } else {
      result = await getImageUser(token, cpf);
    }

    if (result.status !== 200) {
      throw new Error(
        "Não foi possível carregar a imagem do servidor. Tente novamente."
      );
    }
    if (result.data) {
      setImage(result.data.image);
    }
  } catch (error) {
    AlertMsg(error);
  } finally {
    setLoadingImage(false);
  }
};

export const handleImagePicker = async (
  patron,
  cpf,
  setLoadingImage,
  setImage
) => {
  const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!granted) {
    Alert.alert("Permissão necessária", "Permita que o App acesse as imagens");
  } else {
    const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: false,
      aspect: [4, 4],
      quality: 0.5,
    });

    if (!canceled) {
      setLoadingImage(true);
      const formData = new FormData();
      formData.append("file", {
        name: assets[0].fileName,
        uri: assets[0].uri,
        type: assets[0].mimeType,
      });

      // formData._parts.forEach((part) => {
      //   console.log(part[0], part[1]);
      // });

      try {
        const size = parseFloat(assets[0].fileSize) / 1024; //KB
        if (size > 500) {
          setLoadingImage(false);
          throw new Error(
            "Sua imagem é muito grande. Escolha um arquivo de até 500 KB."
          );
        }

        const token = await AsyncStorage.getItem("AccessToken");
        let result = "";
        if (patron) {
          result = await setImageCommunity(formData, token, patron);
        } else {
          result = await setImageUser(formData, token, cpf);
        }

        if (result.status !== 204) {
          setLoadingImage(false);
          throw new Error(
            "Não foi possível enviar sua imagem. Por favor, tente novamente."
          );
        } else {
          getImageProfile(patron, cpf, setImage, setLoadingImage); // Atualizar a imagem após o envio
        }
      } catch (error) {
        AlertMsg(error);
      }
    }
  }
};
export const deleteImageProfile = async (patron, cpf) => {
  try {
    const token = await AsyncStorage.getItem("AccessToken");
    let result = "";
    if (patron) {
      result = await deleteImageCommunity(token, patron);
    } else {
      result = await deleteImageUser(token, cpf);
    }
    if (result.status !== 204) {
      throw new Error("Não foi possível excluir a foto. Tente novamente.");
    }
    return result;
  } catch (error) {
    AlertMsg(error);
  }
};
