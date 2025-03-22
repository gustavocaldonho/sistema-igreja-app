import React, { useEffect, useRef } from "react";
import {
  Modal,
  TouchableWithoutFeedback,
  Text,
  Animated,
  FlatList,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import { formatDateTime } from "./functions";

export default function ModalViews({
  visible,
  setModalViewsVisible,
  usersViewList,
}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    if (visible) {
      setModalViewsVisible(true);
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 100,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setModalViewsVisible(false);
    });
  };

  const renderPersonItem = ({ item }) => (
    <View style={styles.boxPersonView}>
      <Text style={styles.personViewText}>{item.name}</Text>
      <Text style={styles.personViewText}>{formatDateTime(item.date)}</Text>
    </View>
  );

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={handleClose}
    >
      <Animated.View style={[styles.modalContainer, { opacity: fadeAnim }]}>
        <Animated.View
          style={[
            styles.modalContent,
            {
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <TouchableWithoutFeedback onPress={handleClose}>
            <View style={styles.header}>
              <View style={styles.innerHeader}>
                <Text style={styles.headerText}>Visualizado por:</Text>
              </View>
              <View>
                <Icon name="times" style={styles.closeButton} />
              </View>
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.listContent}>
            <FlatList
              data={usersViewList.reverse()}
              renderItem={renderPersonItem}
              keyExtractor={(item) => item.name}
              showsVerticalScrollIndicator={true}
            />
          </View>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
}
