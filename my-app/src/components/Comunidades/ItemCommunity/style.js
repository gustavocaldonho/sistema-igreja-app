import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxItem: {
    width: "100%",
    height: 80,
    borderRadius: 12,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  boxIconLeft: {
    height: "100%",
    width: "20%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  icon: {
    fontSize: 25,
    color: "#f094c0",
  },
  boxInformation: {
    height: "100%",
    width: "70%",
    justifyContent: "center",
  },
  boxPatron: {
    width: "100%",
    height: "55%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    borderColor: "orange",
  },
  textPatron: {
    fontSize: 20,
    color: "#f094c0",
    fontWeight: "500",
  },
  boxLocation: {
    width: "100%",
    height: "45%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderColor: "green",
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
    paddingRight: 20,
  },
  iconRight: {
    fontSize: 17,
    color: "#339dd7",
  },
});

export default styles;
