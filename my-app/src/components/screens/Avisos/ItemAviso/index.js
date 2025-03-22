import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";
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
  setModalViewsVisible,
}) {
  const { user } = useContext(AuthContext);

  const list = [
    { cpf: "12345678909", name: "João" },
    { cpf: "12345678911", name: "Marcos" },
    { cpf: "14734570760", name: "Gustavo" },
  ];

  const hasNotViewed = !list.some((item) => item.cpf === user.cpf);

  return (
    <View style={[styles.boxItem, hasNotViewed && styles.notRead]}>
      <View style={styles.boxTop}>
        <View style={styles.boxTitle}>
          {hasNotViewed && <Icon name="circle" style={styles.iconNotRead} />}
          <Text style={[styles.textTitle, styles.titleNotDisplayed]}>
            {title} {scope && scope !== "private" ? " (Comunidade)" : ""}
          </Text>
        </View>

        {user.position !== "user" && (
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
        )}
      </View>

      <View style={styles.boxBody}>
        <Text style={styles.textBody}>{description}</Text>
      </View>

      <View style={styles.boxPostedByAndAt}>
        {user.position === "council member" ? (
          <TouchableOpacity
            style={styles.innerBoxPostedAtAndAt}
            activeOpacity={0.7}
            onPress={() => setModalViewsVisible(true)}
          >
            <Text style={styles.textPostedByAndAt}>{postedBy}</Text>
            <Icon name="info-circle" style={styles.iconInfo} />
          </TouchableOpacity>
        ) : (
          <Text style={styles.textPostedByAndAt}>{postedBy}</Text>
        )}
        <View style={styles.innerBoxPostedAtAndAt}>
          <Text style={styles.textPostedByAndAt}>
            {getFormatDate(postedAt)}
          </Text>
        </View>
      </View>
    </View>
  );
}
