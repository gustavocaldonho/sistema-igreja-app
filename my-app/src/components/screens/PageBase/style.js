import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
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
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 100,
  },
  boxHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 40,
    color: "#339dd7",
    fontWeight: "500",
    marginBottom: 10,
  },
});

export default styles;
