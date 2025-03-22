import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  modalContent: {
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 15,
    paddingHorizontal: 8,
  },
  innerHeader: {
    justifyContent: "center",
  },
  headerText: {
    fontSize: 18,
    color: "#339dd7",
    fontWeight: "700",
  },
  closeButton: {
    fontSize: 25,
    color: "#f094c0",
  },
  listContent: {
    maxHeight: 200,
    overflow: "scroll",
  },
  boxPersonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
    borderStyle: "dotted",
    paddingHorizontal: 8,
  },
  personViewText: {
    fontSize: 16,
    color: "#339dd7",
  },
});

export default styles;
