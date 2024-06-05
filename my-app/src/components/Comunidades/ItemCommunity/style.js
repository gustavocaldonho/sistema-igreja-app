import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxItem: {
    width: "100%",
    height: 80,
    borderRadius: 12,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  boxIconLeft: {
    height: "100%",
    width: "10%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  icon: {
    fontSize: 20,
    color: "#f094c0",
  },
  boxInformation: {
    height: "100%",
    width: "80%",
    justifyContent: "center",
    paddingLeft: 10,
  },
  boxPatron: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  textPatron: {
    fontSize: 20,
    color: "#f094c0",
    fontWeight: "500",
  },
  boxLocation: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  textLocation: {
    fontSize: 15,
    color: "#339DD7",
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
