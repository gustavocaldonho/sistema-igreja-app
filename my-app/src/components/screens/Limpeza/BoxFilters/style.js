import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#E0E0E0",
    height: width * 0.12,
    overflow: "hidden",
  },
  labelPicker: {
    fontSize: width * 0.045,
  },
});

export default styles;
