import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  formContext: {
    backgroundColor: "#ffffff",
    borderRadius: 30,
    overflow: "hidden",
  },
  boxScrollView: {
    paddingHorizontal: width * 0.05,
  },
  form: {
    width: "100%",
  },
  formLabel: {
    color: "#52637a",
    fontWeight: "700",
    fontSize: width * 0.045,
    paddingLeft: width * 0.05,
  },
  button: {
    width: "80%",
    backgroundColor: "#339dd7",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: height * 0.02,
    paddingBottom: height * 0.02,
    borderRadius: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },
  textButton: {
    fontSize: width * 0.05,
    color: "#ffffff",
    fontWeight: "bold",
  },
  errorMessage: {
    fontSize: width * 0.035,
    color: "red",
    paddingTop: height * 0.001,
    paddingBottom: height * 0.01,
    paddingLeft: width * 0.06,
    fontWeight: "bold",
  },
  errorMessagePassword: {
    paddingBottom: height * 0.015,
  },
});

export default styles;
