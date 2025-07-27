import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#E0E0E0",
    overflow: "hidden",
  },
  labelPicker: {
    fontSize: width * 0.045,
    justifyContent: "center",
    textAlign: "center",
    color: "#000",
  },
});

export default styles;
