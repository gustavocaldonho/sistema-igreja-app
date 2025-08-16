import React, { useContext, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../../contexts/auth";
import { getFormatDate } from "../../Dizimo/functions";
import { viewWarning } from "../../../../services/warning_api";

export default function ItemAviso({
  id,
  title,
  description,
  scope,
  setItemClicked,
  views,
  postedAt,
  postedBy,
  modalVisible,
  setModalVisible,
  setFormModalDefaultVisible,
  setModalViewsVisible,
  setUsersViewList,
}) {
  const { user } = useContext(AuthContext);

  const hasNotViewed = !views.some((item) => item.name === user.name);

  async function toViewWarning(id) {
    try {
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await viewWarning(id, token);
    } catch (error) {
      throw new Error("Não foi possível visulizar o aviso.");
    }
  }

  useEffect(() => {
    if (hasNotViewed) {
      toViewWarning(id);
    }
  }, []);

  return (
    <View style={[styles.boxItem, hasNotViewed && styles.notRead]}>
      <View style={styles.boxTop}>
        <View style={styles.boxTitle}>
          {hasNotViewed && <Icon name="circle" style={styles.iconNotRead} />}
          <Text style={[styles.textTitle, styles.titleNotDisplayed]}>
            {title} {scope && scope === "private" ? " (Conselho)" : ""}
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
            onPress={() => {
              setModalViewsVisible(true);
              setUsersViewList(views);
            }}
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
