import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import { AuthContext } from "../../../../contexts/auth";

export default function itemAdvisor({
  cpf,
  name,
  responsibility,
  advisorModalVisible,
  setAdvisorModalVisible,
  setItemAdvisorClicked,
  setFormModalAdvisorDefaultVisible,
}) {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.itemAdvisor}>
      {user.position !== "user" ? (
        <TouchableOpacity
          style={styles.itemAdvisorLeft}
          onPress={() => {
            setAdvisorModalVisible(!advisorModalVisible);
            setFormModalAdvisorDefaultVisible(true);
            setItemAdvisorClicked({ cpf, name, responsibility });
          }}
        >
          <Icon
            name="pencil-square-o"
            style={{ color: "#339DD7", fontSize: 25 }}
          />
        </TouchableOpacity>
      ) : (
        ""
      )}
      <View style={styles.itemAdvisorMiddle}>
        <Text style={styles.textNameAdvisor}>{name}</Text>
        <Text style={styles.responsibilityAdvisor}>{responsibility}</Text>
      </View>
      {user.position !== "user" ? (
        <TouchableOpacity
          style={styles.itemAdvisorRight}
          onPress={() => {
            setAdvisorModalVisible(!advisorModalVisible);
            setFormModalAdvisorDefaultVisible(false);
            setItemAdvisorClicked({ cpf, name, responsibility });
          }}
        >
          <Icon name="trash-o" style={{ color: "#f094c0", fontSize: 25 }} />
        </TouchableOpacity>
      ) : (
        ""
      )}
    </View>
  );
}
