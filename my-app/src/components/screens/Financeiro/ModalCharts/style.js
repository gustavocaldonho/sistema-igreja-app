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
});
