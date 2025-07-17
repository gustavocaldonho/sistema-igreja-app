import React, { useState, useEffect, useRef } from "react";
import { Modal, TouchableOpacity, Text, Animated } from "react-native";
import styles from "./style";
import { deleteImageProfile, handleImagePicker } from "./functions";

export default function OptionsImage({
  patron,
  cpf,
  image,
  setImage,
  setLoadingImage,
  visibleOptionsImage,
  setVisibleOptionsImage,
  setViewImageVisible,
}) {
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);
  const [showModal, setShowModal] = useState(visibleOptionsImage);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    if (visibleOptionsImage) {
      setShowModal(true);
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
    } else {
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
        setShowModal(false);
      });
    }
  }, [visibleOptionsImage]);

  return (
    <Modal
      transparent
      visible={showModal}
      animationType="none"
      onRequestClose={() => setVisibleOptionsImage(false)}
    >
      <Animated.View style={[styles.modalContainer, { opacity: fadeAnim }]}>
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPress={() => {
            setVisibleOptionsImage(false);
            setConfirmDeleteVisible(false);
          }}
        >
          <Animated.View
            style={[
              styles.modalContent,
              {
                transform: [{ translateY: slideAnim }],
              },
            ]}
          >
            {!confirmDeleteVisible ? (
              <>
                {image ? (
                  <>
                    <TouchableOpacity
                      style={styles.optionButton}
                      onPress={() => {
                        setVisibleOptionsImage(false);
                        setTimeout(() => {
                          setViewImageVisible(true);
                        }, 300);
                      }}
                    >
                      <Text style={styles.optionText}>Ver foto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.optionButton}
                      onPress={() => setConfirmDeleteVisible(true)}
                    >
                      <Text style={styles.optionText}>Deletar foto</Text>
                    </TouchableOpacity>
                  </>
                ) : null}

                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => {
                    setVisibleOptionsImage(false);
                    setTimeout(() => {
                      handleImagePicker(patron, cpf, setLoadingImage, setImage);
                    }, 300);
                  }}
                >
                  <Text style={styles.optionText}>Escolher nova foto</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => setVisibleOptionsImage(false)}
                >
                  <Text style={[styles.optionText, styles.optionTextCancel]}>
                    Cancelar
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.confirmationText}>
                  Tem certeza de que deseja excluir esta foto?
                </Text>
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => {
                    setLoadingImage(true);
                    const result = deleteImageProfile(patron, cpf);
                    setConfirmDeleteVisible(false);
                    setVisibleOptionsImage(false);
                    if (result) {
                      setTimeout(() => {
                        setImage("");
                        setLoadingImage(false);
                      }, 2000);
                      console.log("Foto excluída.");
                    }
                  }}
                >
                  <Text style={styles.optionText}>Sim, excluir</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => setConfirmDeleteVisible(false)}
                >
                  <Text style={[styles.optionText, styles.optionTextCancel]}>
                    Não, cancelar
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    </Modal>
  );
}
