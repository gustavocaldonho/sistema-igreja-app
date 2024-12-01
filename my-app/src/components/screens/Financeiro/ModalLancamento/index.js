import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Keyboard,
  Pressable,
} from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./style";
import RadioButtonType from "./RadioButtonType";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableHighlight } from "react-native";

export default function ModalLancamento({ visible, onClose }) {
  const [selectedRadio, setSelectedRadio] = useState("entry");
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [date, setDate] = useState("");
  const inputRef = useRef(null);

  const [date, setDate] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const onChangeDate = (event, selectedDate) => {
    setDate(selectedDate);
    console.log(selectedDate);
  };
  const showDatePicker = () => {
    setShowCalendar(true);
  };

  const formatMoney = (input) => {
    const numericValue = input.replace(/\D/g, "");
    const formattedValue = (numericValue / 100)
      .toFixed(2)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return formattedValue;
  };

  const handleChangeAmount = (text) => {
    const formattedText = formatMoney(text);
    setAmount(formattedText);
  };

  const resetInput = () => {
    setSelectedRadio("entry");
    setAmount("");
    setTitle("");
    setDescription("");
    setDate("");
  };

  useEffect(() => {
    if (visible && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 200);
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

          <View style={styles.row}>
            <RadioButtonType
              selectedRadio={selectedRadio}
              setSelectedRadio={setSelectedRadio}
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.emoji}>🏷️</Text>
            <TextInput
              style={styles.input}
              placeholder="Título"
              multiline
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.emoji}>📅</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ width: "100%" }}
              onPressIn={() => {
                console.log("Clicou");
              }}
            >
              <TextInput
                style={styles.input}
                placeholder="00/00/0000"
                value={date}
                onChangeText={(text) => setDate(text)}
                editable={false}
              />
            </TouchableOpacity>
          </View>
          {/* {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"date"}
              is24Hour={true}
              display="default"
              onChange={onChangeDate}
            />
          )} */}

          <View style={styles.row}>
            <Text style={styles.emoji}>📝</Text>
            <TextInput
              style={styles.input}
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
              onPress={onClose}
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
