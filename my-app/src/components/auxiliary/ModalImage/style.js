import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  optionButton: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionText: {
    fontSize: 18,
    textAlign: "center",
    color: "#339dd7",
  },
  optionTextCancel: {
    color: "#f094c0",
  },
  confirmationText: {
    fontSize: 18,
    color: "#339dd7",
    textAlign: "center",
    marginBottom: 15,
  },
});

export default styles;
