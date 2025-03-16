import React, { useContext } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../../../../contexts/auth";
import { getFormatDate } from "../../Dizimo/functions";

export default function ItemAviso({
  id,
  title,
  description,
  scope,
  setItemClicked,
  viewed,
  postedAt,
  postedBy,
  modalVisible,
  setModalVisible,
  setFormModalDefaultVisible,
}) {
  const { user } = useContext(AuthContext);

  return (
    // <View style={[styles.boxItem, styles.notRead]}>
    <View style={[styles.boxItem]}>
      <View style={styles.boxTop}>
        <View style={styles.boxTitle}>
          <Text style={[styles.textTitle, styles.titleNotDisplayed]}>
            {title}
            {scope !== "private" && scope !== false ? " (Comunidade)" : ""}
          </Text>
          {viewed ? <Icon name="circle" style={styles.iconNotDisplayed} /> : ""}
        </View>
        {user.position !== "user" ? (
          <View style={styles.boxIcons}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
                setFormModalDefaultVisible(true);
                setItemClicked({ id, title, description, scope });
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
                setItemClicked({ id, title, description, scope });
              }}
            >
              <Icon
                name="trash-o"
                style={[styles.icon, { color: "#f094c0" }]}
              />
            </TouchableOpacity>
          </View>
        ) : (
          ""
        )}
      </View>
      <View style={styles.boxBody}>
        <Text style={styles.textBody}>{description}</Text>
      </View>
      <View style={styles.boxPostedByAndAt}>
        <Text style={styles.textPostedByAndAt}>{postedBy}</Text>
        <Text style={styles.textPostedByAndAt}>{getFormatDate(postedAt)}</Text>
      </View>
    </View>
  );
}
