import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ItemAviso({
  id,
  title,
  message,
  visibleToParish,
  setItemClicked,
  viewed,
  modalVisible,
  setModalVisible,
  setFormModalDefaultVisible,
}) {
  return (
    // <View style={[styles.boxItem, styles.notRead]}>
    <View style={[styles.boxItem]}>
      <View style={styles.boxTop}>
        <View style={styles.boxTitle}>
          <Text style={[styles.textTitle, styles.titleNotDisplayed]}>
            {title}
            {visibleToParish ? " (Paróquia)" : ""}
          </Text>
          {viewed ? <Icon name="circle" style={styles.iconNotDisplayed} /> : ""}
        </View>
        <View style={styles.boxIcons}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
              setFormModalDefaultVisible(true);
              setItemClicked({ id, title, message, visibleToParish });
            }}
          >
            <Icon
              name="pencil-square-o"
              style={[styles.icon, { color: "#339dd7" }]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
              setFormModalDefaultVisible(false);
              setItemClicked({ id, title, message, visibleToParish });
            }}
          >
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
