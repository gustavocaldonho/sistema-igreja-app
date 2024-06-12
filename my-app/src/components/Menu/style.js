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
});

export default styles;
