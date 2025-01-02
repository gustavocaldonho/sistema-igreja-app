import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

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
    fontSize: width * 0.065,
    fontWeight: "600",
    textAlign: "center",
  },
  boxItemsMenu: {
    paddingTop: height * 0.015,
    paddingHorizontal: width * 0.025,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  footer: {},
});

export default styles;
