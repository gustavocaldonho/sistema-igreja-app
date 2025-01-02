import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.075,
    paddingTop: height * 0.07,
    paddingBottom: height * 0.015,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  lineHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxUserProfile: {
    width: "75%",
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.025,
  },
  boxImageProfile: {
    width: "18%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageProfile: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  boxInfoUser: {
    width: "70%",
    justifyContent: "center",
  },
  textNameUser: {
    fontSize: width * 0.045,
    color: "#fff",
    fontWeight: "bold",
  },
  textPatron: {
    fontSize: width * 0.03,
    color: "#fff",
  },
  buttonSignOut: {
    paddingHorizontal: width * 0.025,
    height: height * 0.05,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 10,
    gap: width * 0.0125,
  },
  textSignOut: {
    fontSize: width * 0.0375,
    color: "#fff",
  },
  iconSignOut: {
    fontSize: width * 0.05,
    color: "#fff",
  },
});

export default styles;
