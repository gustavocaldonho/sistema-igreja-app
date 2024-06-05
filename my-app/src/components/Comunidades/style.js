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
    backgroundColor: "#339dd7",
  },
  main: {
    width: "90%",
    alignSelf: "center",
    overflow: "hidden",
    marginBottom: 20,
    gap: 8,
  },
});

export default styles;
