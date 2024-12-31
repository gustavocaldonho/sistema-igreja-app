import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  main: {},
  boxTitleMenu: {
    justifyContent: "center",
    alignItems: "center",
  },
  textMenu: {
    color: "#f0f0f0",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
  },
  boxItemsMenu: {
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  footer: {},
});

export default styles;
