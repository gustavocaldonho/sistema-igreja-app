import { StyleSheet } from "react-native";

const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  modalText: {
    fontSize: 18,
    color: "#52637a",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
    color: "#000",
  },
  button: {
    width: "100%",
    backgroundColor: "#339dd7",
    alignItems: "center",
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: "#d9534f",
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default modalStyles;
