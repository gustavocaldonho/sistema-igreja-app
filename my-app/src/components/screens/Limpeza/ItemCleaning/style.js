import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  boxName: {
    width: "90%",
    flexWrap: "nowrap",
  },
  boxCheck: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 25,
  },
  textName: {
    fontSize: 16,
    color: "#000",
  },
  backgroundChecked: {
    backgroundColor: "#DEEBF7",
  },
});

export default styles;
