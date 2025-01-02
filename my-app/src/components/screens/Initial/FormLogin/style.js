import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  formContext: {
    backgroundColor: "#ffffff",
    paddingHorizontal: width * 0.05,
    borderRadius: 30,
    paddingBottom: height * 0.015,
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
  input: {
    marginBottom: height * 0.02,
  },
  button: {
    width: "80%",
    backgroundColor: "#339dd7",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: height * 0.02,
    paddingBottom: height * 0.02,
    marginTop: height * 0.015,
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
    alignSelf: "center",
    paddingBottom: height * 0.01,
    fontWeight: "bold",
  },
  forgotPassword: {
    paddingTop: height * 0.007,
    paddingLeft: width * 0.06,
    marginBottom: height * 0.02,
    fontStyle: "italic",
    color: "#8F8F8F",
  },
});

export default styles;
