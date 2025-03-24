import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  legendContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },
  legendItem: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  legendIcon: {
    fontSize: 14,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    color: "#000",
  },
});
