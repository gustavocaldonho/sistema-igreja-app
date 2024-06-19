import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    flex: 1,
    overflow: "hidden",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 2,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#339dd7",
  },
  main: {
    width: "100%",
    paddingHorizontal: 15,
  },
});

export default styles;
