import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 10,
    width: 100,
  },
  boxOption: {
    width: 80,
    height: 80,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    marginBottom: 5,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 10,
  },
  textOption: {
    color: "#f0f0f0",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    width: "100%",
  },
  icon: {
    color: "#f094c0",
    fontSize: 36,
  },
});

export default styles;
