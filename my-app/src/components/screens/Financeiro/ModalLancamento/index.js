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
import {
  addBalanceApi,
  updateBalanceApi,
  deleteBalanceApi,
} from "../../../../services/financial_api";
import { ModalContext } from "../../../../contexts/modalContext";
import { ConfirmModalContext } from "../../../../contexts/ConfirmModalContext";
import { AuthContext } from "../../../../contexts/auth";
import { formatDate, formatMoney, parseFormattedNumber } from "./functions";

export default function ModalLancamento({ visible, onClose, itemClicked }) {
  const [showErrors, setShowErrors] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("input");
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const inputRef = useRef(null);

  const { modalAlert } = useContext(ModalContext);
  const { modalConfirm } = useContext(ConfirmModalContext);
  const { user } = useContext(AuthContext);

  const addBalance = async (data) => {
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
  };

  const updateBalance = async (data) => {
    try {
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await updateBalanceApi(data, user.community, token);
      if (response.status === 204) {
        modalAlert("Sucesso!", "Saldo Atualizado.");
      } else {
        throw new Error("Não foi possível atualizar o saldo.");
      }
    } catch (error) {
      modalAlert("Ops!", error.message);
    } finally {
      onClose();
      resetInput();
    }
  };

  const deleteBalance = async () => {
    try {
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await deleteBalanceApi(
        itemClicked.id,
        user.community,
        token
      );
      if (response.status === 204) {
        modalAlert("Sucesso!", "Saldo Excluído.");
      } else {
        throw new Error("Não foi possível excluir o saldo.");
      }
    } catch (error) {
      modalAlert("Ops!", error.message);
    } finally {
      onClose();
      resetInput();
    }
  };

  const onChangeDate = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    setShowCalendar(false);
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
      if (!itemClicked.id) {
        addBalance({
          title,
          description,
          value: formatAmount,
          type: selectedRadio,
          date,
        });
      } else {
        updateBalance({
          title,
          description,
          value: formatAmount,
          type: selectedRadio,
          date,
          id: itemClicked.id,
        });
      }
    } else {
      setShowErrors(true);
    }
  };

  const onDelete = () => {
    modalConfirm("Opa!", "Deseja excluir o saldo selecionado?", deleteBalance);
  };

  useEffect(() => {
    if (itemClicked) {
      setSelectedRadio(itemClicked.type || "input");
      setAmount(itemClicked.value ? formatMoney(itemClicked.value) : "");
      setTitle(itemClicked.title || "");
      setDescription(itemClicked.description || "");
      setDate(itemClicked.date ? new Date(itemClicked.date) : new Date());
    }
  }, [itemClicked]);

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
        translucent
        barStyle="light-content"
        backgroundColor="#339dd7"
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
          {showErrors && !(parseFormattedNumber(amount) >= 1) && (
            <Text style={styles.messageError}>
              Digite um valor mínimo de R$ 1,00
            </Text>
          )}

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
              value={date}
              mode="date"
              is24Hour
              display="default"
              onChange={onChangeDate}
            />
          )}

          <View style={styles.row}>
            <Text style={styles.emoji}>🏷️</Text>
            <TextInput
              style={[styles.input, showErrors && !title && styles.inputError]}
              placeholder="Título"
              multiline
              value={title}
              onChangeText={setTitle}
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.emoji}>📝</Text>
            <TextInput
              style={[
                styles.input,
                showErrors && !description && styles.inputError,
              ]}
              placeholder="Descrição"
              multiline
              value={description}
              onChangeText={setDescription}
            />
          </View>

          <View style={[styles.row, styles.rowButton]}>
            {itemClicked.id ? (
              <TouchableOpacity
                // onPress={deleteBalance}
                onPress={onDelete}
                style={[styles.button, styles.delete]}
              >
                <Icon name="trash" style={styles.buttonIcon} />
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            ) : null}

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
