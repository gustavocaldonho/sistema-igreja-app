import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
    borderRadius: 50,
  },
  input: {
    width: "85%",
    height: "100%",
    fontSize: 20,
    paddingLeft: 20,
    marginRight: "auto",
    marginLeft: "auto",
  },
  inputPassword: {
    width: "70%",
  },
  inputPicker: {
    paddingLeft: 5,
  },
  labelPicker: {
    // color: "#adadad",
  },
  boxIcon: {
    height: "100%",
    width: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
  },
  icon: {
    color: "#adadad",
  },
  iconMoney: {
    fontSize: 20,
  },
  boxIconRight: {
    paddingLeft: 0,
  },
});

export default styles;
