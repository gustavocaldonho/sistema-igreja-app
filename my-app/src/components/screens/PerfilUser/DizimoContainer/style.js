import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxLineListDizimo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  itemLineList: {
    width: "23%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: "#f094c0",
    gap: 5,
    borderWidth: 3,
    borderColor: "#fff",
  },
  textMonth: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  iconStatusMonth: {
    fontSize: 15,
    color: "#fff",
  },
  currentMonth: {
    borderColor: "#339DD7",
  },
  blockedMonth: {
    opacity: 0.7,
  },
});

export default styles;
