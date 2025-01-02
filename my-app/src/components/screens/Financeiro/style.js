import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "85%",
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  boxFiltersAndMain: {
    height: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "space-between",
  },
  boxFilters: {
    height: "10%",
  },
  main: {
    height: "90%",
    overflow: "hidden",
  },
  boxBalance: {
    height: "20%",
  },
  footer: {
    width: "100%",
    height: "10%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  buttonFooter: {
    height: "90%",
    paddingHorizontal: 15,
    backgroundColor: "#287BBF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  textButtonFooter: {
    fontSize: width * 0.045,
    fontWeight: "900",
    color: "#fff",
  },
  boxButtonAdd: {
    width: width * 0.155,
    height: width * 0.155,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#287BBF",
  },
  iconAdd: {
    fontSize: width * 0.045,
    color: "#fff",
  },
  positive: {
    color: "#B9F6CA",
  },
  negative: {
    color: "#F5C3D1",
  },
});

export default styles;
