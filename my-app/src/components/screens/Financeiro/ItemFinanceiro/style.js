import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

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
    width: "60%",
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
    fontSize: width * 0.045,
    fontWeight: "900",
  },
  title: {
    fontSize: width * 0.045,
    fontWeight: "700",
    color: "#858585",
  },
  boxSubtitle: {
    width: "100%",
    height: "40%",
  },
  subtitle: {
    fontSize: width * 0.041,
    color: "#8F8F8F",
  },
  boxRigth: {
    width: "40%",
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
    fontSize: width * 0.045,
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
    fontSize: width * 0.033,
    fontWeight: "bold",
    color: "#858585",
  },
  backgroundColorGray: {
    backgroundColor: "#f5f5f5",
  },
});

export default styles;
