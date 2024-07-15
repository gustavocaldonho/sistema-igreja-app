import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export default function ItemCommunity({ id, patron, location }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate("PerfilCommunity", {
          patron: patron,
          location: location,
        })
      }
    >
      <View style={styles.boxItem}>
        <View style={styles.boxIconLeft}>
          <FontAwesome5 name="church" style={styles.icon} />
        </View>
        <View style={styles.boxInformation}>
          <View style={styles.boxPatron}>
            <Text style={styles.textPatron}>{patron}</Text>
          </View>
          <View style={styles.boxLocation}>
            <Text style={styles.textLocation}>{location}</Text>
          </View>
        </View>
        <View style={styles.boxIconRight}>
          <Icon name="chevron-right" style={styles.iconRight} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
