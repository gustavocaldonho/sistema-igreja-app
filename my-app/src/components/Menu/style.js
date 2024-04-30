import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxMenu: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingVertical: 30,
    paddingHorizontal: 20,

    borderColor: "green",
    borderWidth: 5,
  },
  boxLine: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,

    borderColor: "red",
    borderWidth: 2,
  },
  boxOption: {
    width: "45%",
    height: "100%",

    borderColor: "violet",
    borderWidth: 2,
  },
});

export default styles;
