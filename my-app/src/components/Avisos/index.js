import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Avisos({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <StatusBar backgroundColor="#fff" />
        <LinearGradient
          style={{
            width: "100%",
            height: "100%",
          }}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0.1 }}
          colors={["#f094c0", "#339dd7"]}
        >
          <ScrollView style={styles.main}>
            <View style={[styles.boxItem, styles.notRead]}>
              <View style={styles.boxTitle}>
                <Text style={[styles.textTitle, styles.titleNotDisplayed]}>
                  Título
                </Text>
                <Icon name="circle" style={styles.iconNotDisplayed} />
              </View>
              <View style={styles.boxBody}>
                <Text style={styles.textBody}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took{" "}
                </Text>
              </View>
            </View>
            <View style={[styles.boxItem]}>
              <View style={styles.boxTitle}>
                <Text style={[styles.textTitle]}>Título</Text>
                {/* <Icon name="circle" style={styles.iconNotDisplayed} /> */}
              </View>
              <View style={styles.boxBody}>
                <Text style={styles.textBody}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took{" "}
                </Text>
              </View>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    </View>
  );
}
