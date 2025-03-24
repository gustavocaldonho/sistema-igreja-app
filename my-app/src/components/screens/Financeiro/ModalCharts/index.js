import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./style";
import {
  BarChart,
  LineChart,
  PieChart,
  PopulationPyramid,
  RadarChart,
} from "react-native-gifted-charts";

// import Svg, { Circle, Rect } from "react-native-svg";

const screenWidth = Dimensions.get("window").width;

const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];

export default function ModalCharts({ visible, onClose }) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      presentationStyle="fullScreen"
    >
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#339dd7"
      />
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Icon name="times" style={styles.closeButton} />
          </TouchableOpacity>
          <Text style={styles.title}>Gráficos</Text>
        </View>

        <ScrollView style={styles.content}>
          <BarChart data={data} />
          <PieChart data={data} />
          {/* <Svg height="50%" width="50%" viewBox="0 0 100 100">
            <Circle
              cx="50"
              cy="50"
              r="45"
              stroke="blue"
              strokeWidth="2.5"
              fill="green"
            />
            <Rect
              x="15"
              y="15"
              width="70"
              height="70"
              stroke="red"
              strokeWidth="2"
              fill="yellow"
            />
          </Svg> */}
        </ScrollView>
      </View>
    </Modal>
  );
}
