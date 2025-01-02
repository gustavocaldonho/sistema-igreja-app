import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  main: {
    paddingVertical: 5,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  lineIndicator: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  monthTitle: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
    paddingVertical: 5,
    fontWeight: "bold",
  },
  textIndicator: {
    fontSize: width * 0.045,
    fontWeight: "700",
    color: "#858585",
  },
  valueIndicator: {
    fontSize: width * 0.045,
    fontWeight: "500",
    color: "#858585",
  },
  textTotal: {
    fontSize: width * 0.05,
    fontWeight: "900",
    color: "#5C5C5C",
  },
  valueTotal: {
    fontSize: width * 0.05,
    fontWeight: "900",
  },
  positive: {
    color: "#81C784",
  },
  negative: {
    color: "#E57373",
  },
  hr: {
    borderTopWidth: 1,
    borderColor: "#999",
    paddingTop: 5,
    marginTop: 5,
  },
});

export default styles;
