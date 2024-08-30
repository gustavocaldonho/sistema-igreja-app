import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Vibration,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import styles from "./style";
import { AuthContext } from "../../../../contexts/auth";
import { useNavigation } from "@react-navigation/native";
import {
  checkCpf,
  checkPhone,
  checkText,
  checkDataNasc,
  formatDateBR,
  formatDateUSA,
  formatCpf,
  desformatCpf,
  checkPassword,
  generatePasswordDefault,
  desformatPhone,
  formatPhone,
} from "./functions";
import Spinner from "react-native-loading-spinner-overlay";
import LoadingIndicator from "../../../auxiliary/LoadingIndicator";
import { getCommunitiesWithoutToken } from "../../../../services/community_api";
import { signupUser, updateUser } from "../../../../services/user_api";
import {
  msgCadastrySuccess,
  msgCadastryError,
  msgUpdateError,
  msgUpdateSuccess,
} from "./alerts";
import ModalCompleteRegistry from "./ModalCompleteRegistry";

import InputGroupName from "../../../auxiliary/InputGroup/InputGroupName";
import InputGroupCpf from "../../../auxiliary/InputGroup/InputGroupCpf";
import InputGroupPhone from "../../../auxiliary/InputGroup/InputGroupPhone";
import InputGroupDN from "../../../auxiliary/InputGroup/InputGroupDN";
import InputGroupSelect from "../../../auxiliary/InputGroup/InputGroupSelect";
import AsyncStorage from "@react-native-async-storage/async-storage";
import InputGroupPassword from "../../../auxiliary/InputGroup/InputGroupPassword";

export default function FormCadastroUser({ user, setModalVisible }) {
  const [name, setName] = useState(user ? user.name : "");
  const [cpf, setCpf] = useState(user ? user.cpf : "");
  const [phone, setPhone] = useState(user ? formatPhone(user.phone) : "");
  const [dataNasc, setDataNasc] = useState(
    user ? formatDateBR(user.birthday) : ""
  );
  const [community, setCommunity] = useState(user ? user.community : "");
  const [password, setPassword] = useState(user ? user.password : "");
  const [passwordConfirmation, setPasswordConfirmation] = useState(
    user ? user.password : ""
  );
  const [showErrors, setShowErrors] = useState(false);
  const { setDatasUser, setRegistryEntry } = useContext(AuthContext);
  const navigation = useNavigation();
  const [patronList, setPatronList] = useState([]);
  const [visibleSpinner, setVisibleSpinner] = useState(false);
  const [visibleIndicator, setVisibleIndicator] = useState(false);
  const [modalSuccessVisible, setModalSuccessVisible] = useState(false);

  async function getPatrons() {
    try {
      setVisibleIndicator(true);
      const response = await getCommunitiesWithoutToken();
      setPatronList(response);
      setVisibleIndicator(false);
    } catch (error) {
      console.log(error);
    }
  }

  function getItemsSelectCommunity(dataList) {
    if (!dataList || dataList.length === 0) {
      return [{ label: "Sua Comunidade", value: "" }];
    }

    return [{ label: "Sua Comunidade", value: "" }].concat(
      dataList.map((d) => ({ label: d, value: d }))
    );
  }

  useEffect(() => {
    getPatrons();
  }, []);

  async function addUser(item) {
    // console.log(item);
    try {
      setVisibleSpinner(true);
      const response = await signupUser(item);
      if (response.status === 201) {
        setVisibleSpinner(false);
        setModalSuccessVisible(!modalSuccessVisible);
      }
      console.log("(add): ", item);
    } catch (error) {
      msgError();
      console.log(error);
    }
  }

  async function updateDatasUser(newDatas) {
    console.log("newDatas: ", newDatas);
    try {
      setVisibleSpinner(true);
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await updateUser(newDatas, token);
      if (response.status === 200) {
        await AsyncStorage.setItem(
          "AccessToken",
          String(response.data.access_token)
        );
        await setDatasUser(response.data.access_token, newDatas.password);
        setVisibleSpinner(false);
        msgUpdateSuccess(setModalVisible, navigation);
      }
    } catch (error) {
      console.log(error);
      msgUpdateError();
    }
  }

  function resetInputs() {
    setName("");
    setCpf("");
    setPhone("");
    setDataNasc("");
    setCommunity("");
    setShowErrors(false);
  }

  function sendDatas() {
    if (
      !checkText(name) &&
      !checkCpf(cpf) &&
      !checkPhone(phone) &&
      !checkDataNasc(dataNasc) &&
      !checkText(community)
    ) {
      if (!user) {
        addUser({
          name: name.trim(),
          cpf: desformatCpf(cpf),
          phone: desformatPhone(phone),
          birthday: formatDateUSA(dataNasc),
          community,
          password: generatePasswordDefault(name, dataNasc),
        });
      } else if (!checkPassword(password, passwordConfirmation)) {
        updateDatasUser({
          name: name.trim(),
          cpf: desformatCpf(cpf),
          phone: desformatPhone(phone),
          birthday: formatDateUSA(dataNasc),
          community,
          password,
        });
      } else {
        setShowErrors(true);
      }
    } else {
      setShowErrors(true);
    }
  }
  return (
    <KeyboardAvoidingView
      style={styles.formContext}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 250}
    >
      {modalSuccessVisible ? (
        <ModalCompleteRegistry
          cpf={cpf}
          password={generatePasswordDefault(name, dataNasc)}
          modalVisible={modalSuccessVisible}
          setModalVisible={setModalSuccessVisible}
          setRegistryEntry={setRegistryEntry}
        />
      ) : (
        ""
      )}

      <Spinner visible={visibleSpinner} />
      <ScrollView style={styles.boxScrollView}>
        <Pressable style={styles.form} onPress={Keyboard.dismiss}>
          <InputGroupName
            iconName="user"
            placeholder="Digite seu Nome"
            defaultValue={name}
            onChangeText={(text) => {
              setName(text);
            }}
          />
          <Text style={styles.errorMessage}>
            {checkText(name) && showErrors ? "Nome Inválido!" : ""}
          </Text>

          <InputGroupCpf
            iconName="id-card"
            placeholder="000.000.000-00"
            value={cpf}
            // defaultValue={cpf}
            onChangeText={(text) => {
              setCpf(text);
            }}
          />
          <Text style={styles.errorMessage}>
            {checkCpf(cpf) && showErrors ? "CPF Inválido!" : ""}
          </Text>

          <InputGroupPhone
            iconName="phone"
            placeholder="(27) 00000-0000"
            // defaultValue={phone}
            value={phone}
            onChangeText={(text) => {
              setPhone(text);
            }}
          />
          <Text style={styles.errorMessage}>
            {checkPhone(phone) && showErrors ? "Número Inválido!" : ""}
          </Text>

          <InputGroupDN
            iconName="birthday-cake"
            placeholder="DD/MM/AAAA"
            value={dataNasc}
            // defaultValue={dataNasc}
            onChangeText={(text) => {
              setDataNasc(text);
            }}
          />
          <Text style={styles.errorMessage}>
            {checkDataNasc(dataNasc) && showErrors
              ? "Data de Nascimento Inválida!"
              : ""}
          </Text>

          <InputGroupSelect
            iconName="church"
            options={getItemsSelectCommunity(patronList)}
            selectedValue={community}
            onValueChange={(text) => {
              setCommunity(text);
            }}
          />
          <Text style={styles.errorMessage}>
            {checkText(community) && showErrors
              ? "Selecione uma Comunidade!"
              : ""}
          </Text>

          {user ? (
            <View>
              <InputGroupPassword
                iconName="key"
                placeholder="Sua senha"
                defaultValue={password}
                // value={password}
                onChangeText={(text) => {
                  setPassword(text);
                }}
                style={{ marginBottom: 10 }}
              />
              <InputGroupPassword
                iconName="key"
                placeholder="Confirme sua senha"
                defaultValue={passwordConfirmation}
                // value={passwordConfirmation}
                onChangeText={(text) => {
                  setPasswordConfirmation(text);
                }}
              />

              <Text style={[styles.errorMessage, styles.errorMessagePassword]}>
                {checkPassword(password, passwordConfirmation) && showErrors
                  ? "Senhas Inválidas! (Mínimo de 4 dígitos)"
                  : ""}
              </Text>
            </View>
          ) : (
            ""
          )}

          {visibleIndicator ? (
            <LoadingIndicator color="#339dd7" />
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                sendDatas();
              }}
            >
              <Text style={styles.textButton}>
                {user ? "Atualizar" : "Cadastrar"}
              </Text>
            </TouchableOpacity>
          )}
          {user ? (
            <TouchableOpacity
              style={[styles.button, styles.buttonCancel]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textButton}>Cancelar</Text>
            </TouchableOpacity>
          ) : (
            ""
          )}
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
