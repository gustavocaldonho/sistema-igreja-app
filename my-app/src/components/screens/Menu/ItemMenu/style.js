import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    // width: "100%",
    // flex: 1,
  },
  boxOption: {
    width: 80,
    height: 80,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    alignSelf: "center",
    marginBottom: 5,
    // borderWidth: 2,
  },
  textOption: {
    width: "100%",
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    color: "#f094c0",
    fontSize: 30,
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
