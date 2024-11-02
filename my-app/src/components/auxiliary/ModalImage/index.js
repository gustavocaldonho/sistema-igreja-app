import React, { useState } from "react";
import { Modal, TouchableOpacity, View, Text } from "react-native";
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

  return (
    <Modal
      transparent
      visible={visibleOptionsImage}
      animationType="slide"
      onRequestClose={() => setVisibleOptionsImage(false)}
    >
      <TouchableOpacity
        style={styles.modalContainer}
        activeOpacity={1}
        onPress={() => {
          setVisibleOptionsImage(false);
          setConfirmDeleteVisible(false);
        }}
      >
        <View style={styles.modalContent}>
          {/* Exibe opções normais se a confirmação de exclusão não está visível */}
          {!confirmDeleteVisible ? (
            <>
              {image ? (
                <>
                  <TouchableOpacity
                    style={styles.optionButton}
                    onPress={() => {
                      setVisibleOptionsImage(false);
                      setViewImageVisible(true);
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
                  handleImagePicker(patron, cpf, setLoadingImage, setImage);
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
            // Exibe a confirmação de exclusão
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
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
