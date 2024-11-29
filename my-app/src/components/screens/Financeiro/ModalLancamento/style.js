import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#6200ea",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 20,
  },
  closeButton: {
    fontSize: 24,
    color: "#fff",
    marginRight: 10,
  },
  title: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  boxAmount: {
    width: "100%",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  label: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
  },
  amountInput: {
    width: "80%",
    fontSize: 50,
    fontWeight: "bold",
    color: "#333",
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  radioOption: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  icon: {
    fontSize: 18,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  switchGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  switchText: {
    marginLeft: 5,
    fontSize: 16,
    color: "#333",
  },
  smallInput: {
    width: 60,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginHorizontal: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#6200ea",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
