import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxTitleMenu: {
    width: "100%",
    marginBottom: 20,
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
    paddingBottom: 10,
  },
  main: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center",
    paddingHorizontal: 10,
  },
  buttonSignOut: {
    marginTop: 15,
    paddingVertical: 5,
    paddingHorizontal: 20,
    gap: 5,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    alignSelf: "center",
    flexDirection: "row",
  },
  textSignOut: {
    fontSize: 20,
    color: "#f094c0",
  },
  iconSignOut: {
    fontSize: 25,
    color: "#f094c0",
  },
});

export default styles;
