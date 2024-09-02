import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxLineListDizimo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: "center",
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 5,
  },
  itemMonth: {
    width: "24%",
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: "#f094c0",
    gap: 5,
    borderWidth: 3,
    borderColor: "#fff",
    margin: 1,
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
