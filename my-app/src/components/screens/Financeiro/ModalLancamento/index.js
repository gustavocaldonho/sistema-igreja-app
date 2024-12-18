import React, { useState, useRef, useEffect, useContext } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./style";
import RadioButtonType from "./RadioButtonType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addBalanceApi } from "../../../../services/financial_api";
import { ModalContext } from "../../../../contexts/modalContext";
import { AuthContext } from "../../../../contexts/auth";
import { formatDate, formatMoney, parseFormattedNumber } from "./functions";

export default function ModalLancamento({ visible, onClose, data = "" }) {
  const [showErrors, setShowErrors] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("input");
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const inputRef = useRef(null);
  const { modalAlert } = useContext(ModalContext);
  const { user } = useContext(AuthContext);

  async function addBalance(data) {
    try {
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await addBalanceApi(data, user.community, token);
      if (response.status === 201) {
        modalAlert("Sucesso!", "Saldo Adicionado.");
      } else {
        throw new Error("Não foi possível adicionar o saldo ao extrato.");
      }
    } catch (error) {
      modalAlert("Ops!", error.message);
    } finally {
      onClose();
      resetInput();
    }
  }

  const onChangeDate = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
      setShowCalendar(false);
    }
  };

  const handleChangeAmount = (text) => {
    const formattedText = formatMoney(text);
    setAmount(formattedText);
  };

  const resetInput = () => {
    setSelectedRadio("input");
    setAmount("");
    setTitle("");
    setDescription("");
    setDate(new Date());
    setShowErrors(false);
  };

  const sendBalance = () => {
    const formatAmount = parseFormattedNumber(amount);
    if (formatAmount >= 1 && title && description) {
      addBalance({
        title,
        description,
        value: parseFormattedNumber(amount),
        type: selectedRadio,
        date,
      });
    } else {
      setShowErrors(true);
    }
  };

  useEffect(() => {
    if (visible && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 500);
    }
  }, [visible]);

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <StatusBar
        translucent={true}
        barStyle="light-content"
        backgroundColor={"#339dd7"}
      />
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              onClose();
              resetInput();
            }}
          >
            <Icon name="times" style={styles.closeButton} />
          </TouchableOpacity>
          <Text style={styles.title}>Lançamento</Text>
        </View>

        <ScrollView style={styles.content}>
          <View style={styles.boxAmount}>
            <Text style={styles.label}>R$</Text>
            <TextInput
              ref={inputRef}
              style={styles.amountInput}
              placeholder="0,00"
              keyboardType="numeric"
              value={amount}
              onChangeText={handleChangeAmount}
              maxLength={10}
            />
          </View>
          {showErrors && !(parseFormattedNumber(amount) >= 1) ? (
            <Text style={styles.messageError}>
              Digite um valor mínimo de R$ 1,00
            </Text>
          ) : null}

          <View style={styles.row}>
            <RadioButtonType
              selectedRadio={selectedRadio}
              setSelectedRadio={setSelectedRadio}
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.emoji}>📅</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.input}
              onPress={() => setShowCalendar(true)}
            >
              <Text style={styles.text}>{formatDate(date)}</Text>
            </TouchableOpacity>
          </View>
          {showCalendar && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"date"}
              is24Hour={true}
              display="default"
              onChange={onChangeDate}
            />
          )}

          <View style={styles.row}>
            <Text style={styles.emoji}>🏷️</Text>
            <TextInput
              style={[
                styles.input,
                showErrors && !title ? styles.inputError : null,
              ]}
              placeholder="Título"
              multiline
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.emoji}>📝</Text>
            <TextInput
              style={[
                styles.input,
                showErrors && !description ? styles.inputError : null,
              ]}
              placeholder="Descrição"
              multiline
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </View>

          <View style={[styles.row, styles.rowButton]}>
            <TouchableOpacity
              onPress={onClose}
              style={[styles.button, styles.delete]}
            >
              <Icon name="trash" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Excluir</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={sendBalance}
              style={[styles.button, styles.save]}
            >
              <Icon name="save" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}
