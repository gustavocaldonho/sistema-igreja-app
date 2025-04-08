import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#E0E0E0",
  },
  labelPicker: {
    fontSize: width * 0.045,
  },
});

export default styles;
