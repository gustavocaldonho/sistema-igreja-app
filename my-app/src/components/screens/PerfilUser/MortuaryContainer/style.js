import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxLineListMortuary: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    paddingTop: 10,
    flexWrap: "wrap",
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
  textYear: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
  },
  currentYear: {
    borderColor: "#339DD7",
  },
  iconStatusYear: {
    fontSize: 15,
    color: "#fff",
  },
});

export default styles;
