import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxItem: {
    width: "100%",
    height: 60,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  boxIconLeft: {
    height: "100%",
    width: "10%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  iconUser: {
    fontSize: 20,
    color: "#f094c0",
  },
  boxName: {
    height: "100%",
    width: "80%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textName: {
    fontSize: 20,
    color: "#f094c0",
    fontWeight: "500",
  },
  boxIconRight: {
    height: "100%",
    width: "10%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  iconRight: {
    fontSize: 17,
    color: "#339dd7",
  },
});

export default styles;
