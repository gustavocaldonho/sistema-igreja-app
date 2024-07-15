import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "#339dd7",
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    textAlignVertical: "top",
    fontSize: 16,
    color: "#339dd7",
  },
  areaInput: {
    height: 120,
  },
  error: {
    borderColor: "red",
  },
  boxSwitch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  textSwitch: {
    fontSize: 15,
    color: "#f094c0",
  },
});

export default styles;
