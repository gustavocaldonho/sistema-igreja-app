import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    display: "none",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginTop: 180,
    marginHorizontal: 20,
    marginBottom: 100,
    paddingTop: 30,
    borderRadius: 30,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.05,
    elevation: 5,
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
    margin: 12,
    paddingLeft: 10,
    marginBottom: 20,
  },
  buttonLogin: {
    width: "90%",
    backgroundColor: "#339DD7",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
    borderRadius: 50,
  },
  textButtonLogin: {
    fontSize: 20,
    color: "#ffffff",
  },
  errorMessage: {
    fontSize: 14,
    color: "red",
    paddingLeft: 20,
    fontWeight: "bold",
  },
});

export default styles;
