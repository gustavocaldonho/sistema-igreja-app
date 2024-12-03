import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 75,
    width: "100%",
    paddingVertical: 10,
    paddingRight: 10,
    paddingLeft: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  boxMain: {
    width: "65%",
    height: "100%",
    justifyContent: "center",
  },
  boxTitle: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    gap: 5,
  },
  indicatorStatus: {
    fontSize: 18,
    fontWeight: "900",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#858585",
  },
  boxSubtitle: {
    width: "100%",
    height: "50%",
  },
  subtitle: {
    fontSize: 15,
    color: "#8F8F8F",
  },
  boxRigth: {
    width: "35%",
    height: "100%",
  },
  boxValue: {
    width: "100%",
    height: "70%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 5,
  },
  value: {
    fontSize: 18,
    fontWeight: "700",
  },
  positive: {
    color: "#81C784",
  },
  negative: {
    color: "#E57373",
  },
  boxDate: {
    width: "100%",
    height: "30%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  date: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#858585",
  },
  backgroundColorGray: {
    backgroundColor: "#f5f5f5",
  },
});

export default styles;
