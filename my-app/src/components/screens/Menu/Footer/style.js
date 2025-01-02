import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: height * 0.02,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 70,
    alignSelf: "center",
    marginBottom: height * 0.005,
  },
  footerTitle: {
    color: "#fff",
    fontSize: width * 0.04,
    fontWeight: "600",
    textAlign: "center",
  },
  footerSubTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: width * 0.015,
  },
  subTitle: {
    color: "#fff",
    fontSize: width * 0.03,
    fontStyle: "italic",
  },
  iconCopyright: {
    fontSize: width * 0.025,
  },
});

export default styles;
