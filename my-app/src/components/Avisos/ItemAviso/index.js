import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
// import ModalConfirmation from "../ModalConfirmation";

export default function ItemAviso({
  id,
  title,
  message,
  warningList,
  setWarningList,
  setItemClicked,
  viewed,
  modalVisible,
  setModalVisible,
}) {
  function removeItemFromList(id) {
    const newList = [...warningList];
    let itemIndex = "";
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id === id) {
        itemIndex = newList.indexOf(newList[i]);
      }
    }
    newList.splice(itemIndex, 1);
    setWarningList(newList);
  }

  return (
    // <View style={[styles.boxItem, styles.notRead]}>
    <View style={[styles.boxItem]}>
      <View style={styles.boxTop}>
        <View style={styles.boxTitle}>
          <Text style={[styles.textTitle, styles.titleNotDisplayed]}>
            {title}
          </Text>
          {viewed ? <Icon name="circle" style={styles.iconNotDisplayed} /> : ""}
        </View>
        <View style={styles.boxIcons}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
              setItemClicked({ id, title, message });
            }}
          >
            <Icon
              name="pencil-square-o"
              style={[styles.icon, { color: "#339dd7" }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeItemFromList(id)}>
            <Icon name="trash-o" style={[styles.icon, { color: "#f094c0" }]} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.boxBody}>
        <Text style={styles.textBody}>{message}</Text>
      </View>
    </View>
  );
}
