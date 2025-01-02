import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  boxTitle: {
    alignItems: "center",
  },
  boxLogo: {
    marginBottom: 10,
  },
  logo: {
    width: width * 0.35,
    height: width * 0.35 * (120 / 140),
  },
  textTitle: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default styles;
