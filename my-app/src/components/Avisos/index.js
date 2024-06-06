import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import ScreenBase from "../ScreenBase";
import ButtonAdd from "../ButtonAdd";

export default function Avisos({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ScreenBase colorStatusBar={"#fff"}>
          <View style={styles.main}>
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
          </View>
        </ScreenBase>
      </View>
      <ButtonAdd />
    </View>
  );
}
