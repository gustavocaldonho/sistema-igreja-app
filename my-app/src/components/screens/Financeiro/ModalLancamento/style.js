import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#339dd7",
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 30,
  },
  closeButton: {
    fontSize: 27,
    color: "#fff",
    marginRight: 10,
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 25,
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
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 10,
  },
  emoji: {
    fontSize: 22,
    marginRight: 15,
  },
  input: {
    flex: 1,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
  },
  rowButton: {
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#6200ea",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  buttonIcon: {
    color: "#fff",
    fontSize: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  save: {
    backgroundColor: "#339dd7",
  },
  delete: {
    backgroundColor: "#f094c0",
  },
});
