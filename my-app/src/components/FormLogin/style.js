import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    borderRadius: 30,
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
  buttonLogin: {
    width: "80%",
    backgroundColor: "#339DD7",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 14,
    paddingBottom: 14,
    marginTop: 20,
    borderRadius: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },
  textButtonLogin: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
  errorMessage: {
    fontSize: 14,
    color: "red",
    paddingLeft: 25,
    marginBottom: 15,
    fontWeight: "bold",
  },
});

export default styles;
