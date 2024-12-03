import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "85%",
    marginTop: 12,
    justifyContent: "space-between",
    borderRadius: 10,
    overflow: "hidden",
  },
  boxFiltersAndMain: {
    height: "78%",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
  },
  boxFilters: {
    maxHeight: "10%",
  },
  main: {
    maxHeight: "90%",
    overflow: "hidden",
  },
  buttonAnnualSummary: {
    height: 60,
    paddingHorizontal: 15,
    position: "absolute",
    bottom: 20,
    left: 30,
    backgroundColor: "#287BBF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textAnnualSummary: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "800",
  },
});

export default styles;
