import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: width * 0.02,
    width: width * 0.25,
  },
  boxOption: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.05,
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
    fontSize: width * 0.035,
    fontWeight: "600",
    textAlign: "center",
    width: "100%",
  },
  icon: {
    color: "#f094c0",
    fontSize: width * 0.09,
  },
});

export default styles;
