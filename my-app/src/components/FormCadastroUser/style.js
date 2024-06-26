import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    overflow: "hidden",
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
  input: {
    width: "90%",
    fontSize: 20,
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 50,
    paddingLeft: 20,
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 10,
  },
  buttonCadastro: {
    width: "80%",
    backgroundColor: "#339dd7",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 14,
    paddingBottom: 14,
    marginTop: 30,
    borderRadius: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },
  textButtonCadastro: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
  errorMessage: {
    fontSize: 14,
    color: "red",
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 25,
    fontWeight: "bold",
  },
  forgotPassword: {
    paddingTop: 5,
    paddingLeft: 25,
    fontStyle: "italic",
    color: "#8F8F8F",
  },
  boxScrollView: {
    paddingHorizontal: 20,
  },
});

export default styles;
