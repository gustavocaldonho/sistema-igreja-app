import React, { useEffect, useState, useContext } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import ButtonBack from "../../auxiliary/ButtonBack";
import BoxLinearGradient from "../../screens/PageBase/BoxLinearGradient";
import ItemHighlight from "./ItemHighlight";
import ModalCommunity from "../Comunidades/ModalCommunity";
import ModalAdvisor from "./ModalAdvisor";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDatasCommunity } from "../../../services/community_api";
import { getUsersTemp } from "../../../services/user_api";
import ItemAdvisorContent from "./ItemAdvisorContent";
import styles from "./style";
import { AuthContext } from "../../../contexts/auth";
import AlertMsg from "../../auxiliary/AlertMsg";

export default function PerfilCommunity({ navigation, route }) {
  const { patron, location } = route.params;
  const [datas, setDatas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useContext(AuthContext);
  const [qtdUsers, setQtdUsers] = useState(0);

  const [itemAdvisorClicked, setItemAdvisorClicked] = useState({});
  const [advisorModalVisible, setAdvisorModalVisible] = useState(false);
  const [formModalAdvisorDefaultVisible, setFormModalAdvisorDefaultVisible] =
    useState(true);

  function onPressButtonAddAdvisor() {
    setAdvisorModalVisible(!advisorModalVisible);
    setFormModalAdvisorDefaultVisible(true);
    setItemAdvisorClicked({});
  }

  async function getDatasCommunityForm() {
    try {
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await getDatasCommunity(patron, token);
      if (response.status === 200) {
        setDatas(response.data);
      } else {
        throw new Error("Não foi possível obter as informações da comunidade.");
      }
    } catch (error) {
      AlertMsg(error);
    }
  }

  async function getUsers() {
    try {
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await getUsersTemp(token);
      if (response != undefined) {
        setQtdUsers(response.length);
      } else {
        throw new Error("Não foi possível obter os usuários.");
      }
    } catch (error) {
      AlertMsg(error);
    }
  }

  useEffect(() => {
    getDatasCommunityForm();
    getUsers();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#339DD7" />

      <BoxLinearGradient style={{ flex: 1 }}>
        <ModalCommunity
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          community={datas}
        />
        <View style={{ flex: 1 }}>
          <View style={styles.boxButtonBack}>
            <ButtonBack color={"#fff"} />
          </View>
          <View style={styles.boxTop}>
            <View style={[styles.boxImageProfile, styles.boxShadowLight]}>
              <Image
                style={styles.imageProfile}
                source={require("../../../images/church-icon.png")}
              />
              <View style={styles.boxIconCamera}>
                <TouchableOpacity onPress={() => {}}>
                  <Icon name="camera" style={styles.iconCamera} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.boxNamePatron}>
            <Text style={styles.textNamePatron}>{patron}</Text>
            <Text style={styles.textLocation}>
              {location ? location : datas.location}
            </Text>
            {user.position !== "user" ? (
              <TouchableOpacity
                style={styles.buttonChangeDatas}
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <Text style={styles.textChangeDatas}>ALTERAR DADOS</Text>
              </TouchableOpacity>
            ) : (
              ""
            )}
          </View>
          <ScrollView>
            <View
              style={[styles.boxInformations, styles.boxHighlightInformations]}
            >
              <ItemHighlight
                style={styles.boxShadow}
                number={qtdUsers}
                label={"Fiéis"}
              />
              <ItemHighlight
                style={styles.boxShadow}
                number={0}
                label={"Pagantes"}
              />
              <ItemHighlight
                style={styles.boxShadow}
                number={"R$ 0,00"}
                label={"Dízimo"}
              />
              <ItemHighlight
                style={styles.boxShadow}
                number={"R$ 0,00"}
                label={"Caixa Mortuária"}
              />
            </View>
            <View style={[styles.boxInformations]}>
              <Text style={styles.titleBoxAdvidors}>MEMBROS DO CONSELHO</Text>
              {advisorModalVisible ? (
                <ModalAdvisor
                  patron={patron}
                  advisorModalVisible={advisorModalVisible}
                  setAdvisorModalVisible={setAdvisorModalVisible}
                  itemAdvisorClicked={itemAdvisorClicked}
                  setItemAdvisorClicked={setItemAdvisorClicked}
                  formModalAdvisorDefaultVisible={
                    formModalAdvisorDefaultVisible
                  }
                />
              ) : (
                <ItemAdvisorContent
                  patron={patron}
                  advisorModalVisible={advisorModalVisible}
                  setAdvisorModalVisible={setAdvisorModalVisible}
                  setItemAdvisorClicked={setItemAdvisorClicked}
                  setFormModalAdvisorDefaultVisible={
                    setFormModalAdvisorDefaultVisible
                  }
                />
              )}
              {user.position !== "user" ? (
                <TouchableOpacity
                  style={styles.boxAddMembro}
                  onPress={() => {
                    onPressButtonAddAdvisor();
                  }}
                >
                  <Icon name="plus" style={styles.iconPlusMembro} />
                  <Text style={styles.textAddMembro}>ADICIONAR MEMBRO</Text>
                </TouchableOpacity>
              ) : (
                ""
              )}
            </View>
          </ScrollView>
        </View>
      </BoxLinearGradient>
    </View>
  );
}
