import { StyleSheet } from "react-native";

const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  modalContent: {
    width: "100%",
    marginTop: 30,
    alignItems: "center",
    borderRadius: 20,
    borderColor: "#fff",
  },
  modalText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontWeight: "800",
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    marginTop: 40,
    marginBottom: 10,
    fontSize: 20,
    paddingHorizontal: 50,
    color: "#fff",
  },
  inputDisable: {
    opacity: 0.6,
  },
  errorText: {
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
    textAlignVertical: "center",
  },
  button: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 14,
    borderRadius: 30,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  textConfirm: {
    color: "#339dd7",
  },
  textCancel: {
    color: "#f094c0",
  },
});

export default modalStyles;
