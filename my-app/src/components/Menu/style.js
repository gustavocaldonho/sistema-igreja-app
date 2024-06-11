import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundColor: "#339dd7",
  },
  textMenu: {
    color: "#fff",
    marginTop: 60,
    marginBottom: 20,
    fontWeight: "500",
    alignSelf: "center",
    fontSize: 40,
  },
  main: {
    width: "100%",
    display: "flex",
    alignSelf: "center",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 10,
  },
  boxLine: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",

    // borderWidth: 1,
  },
  boxOption: {
    width: "45%",
    height: 150,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginBottom: 20,

    // borderWidth: 1,
  },
  textOption: {
    color: "#339dd7",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
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
