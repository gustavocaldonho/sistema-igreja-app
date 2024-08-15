import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#339dd7",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  labelPicker: {
    color: "#339dd7",
  },
  labelPickerDefault: {
    color: "#000",
  },
  boxIcon: {
    height: "100%",
    width: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
