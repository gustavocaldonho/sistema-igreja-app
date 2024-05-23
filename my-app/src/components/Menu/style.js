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
  boxBackgroundTop: {
    width: "100%",
    height: "30%",
    borderBottomEndRadius: 35,
    borderBottomStartRadius: 35,
  },
  textMenu: {
    color: "#fff",
    marginTop: 60,
    fontWeight: "500",
    alignSelf: "center",
    fontSize: 40,
  },
  main: {
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  boxLine: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  boxOption: {
    width: "45%",
    height: "100%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    shadowColor: "#171717",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10,
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
});

export default styles;
