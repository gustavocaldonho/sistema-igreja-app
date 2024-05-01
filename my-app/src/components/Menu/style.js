import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxMenu: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingTop: 45,
    paddingHorizontal: 15,

    // borderColor: "green",
    // borderWidth: 5,
  },
  boxLine: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    justifyContent: "space-between",

    // borderColor: "red",
    // borderWidth: 2,
  },
  boxOption: {
    width: "48%",
    height: "100%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",

    borderColor: "violet",
    borderWidth: 2,
  },
});

export default styles;
