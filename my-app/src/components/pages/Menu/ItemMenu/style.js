import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxOption: {
    width: 175,
    height: 170,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  textOption: {
    width: "100%",
    color: "#339dd7",
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    color: "#f094c0",
    fontSize: 75,
  },
  boxShadow: {
    shadowColor: "#171717",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10,
  },
});

export default styles;
