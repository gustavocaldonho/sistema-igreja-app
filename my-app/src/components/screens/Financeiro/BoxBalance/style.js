import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxBalance: {
    paddingVertical: 5,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  lineIndicator: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textIndicator: {
    fontSize: 18,
    fontWeight: "700",
    color: "#858585",
  },
  valueIndicator: {
    fontSize: 18,
    fontWeight: "500",
    color: "#858585",
  },
  textTotal: {
    fontSize: 20,
    fontWeight: "900",
    color: "#5C5C5C",
  },
  valueTotal: {
    fontSize: 20,
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
