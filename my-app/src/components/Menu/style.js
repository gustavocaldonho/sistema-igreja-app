import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxTitleMenu: {
    width: "100%",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textMenu: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 40,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
  },
  main: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center",
    paddingHorizontal: 10,
  },
  boxOption: {
    width: "45%",
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
