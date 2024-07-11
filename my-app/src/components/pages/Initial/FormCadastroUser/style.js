import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    backgroundColor: "#ffffff",
    borderRadius: 30,
    overflow: "hidden",
  },
  boxScrollView: {
    paddingHorizontal: 20,
  },
  form: {
    width: "100%",
  },
  formLabel: {
    color: "#000000",
    fontWeight: "700",
    color: "#52637a",
    fontSize: 18,
    paddingLeft: 20,
  },
  button: {
    width: "80%",
    backgroundColor: "#339dd7",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttonCancel: {
    backgroundColor: "#f094c0",
    marginTop: 10,
  },
  textButton: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
  errorMessage: {
    fontSize: 14,
    color: "red",
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 25,
    fontWeight: "bold",
  },
  forgotPassword: {
    paddingTop: 5,
    paddingLeft: 25,
    fontStyle: "italic",
    color: "#8F8F8F",
  },
});

export default styles;
