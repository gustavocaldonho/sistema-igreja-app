import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "85%",
    height: "100%",
    fontSize: 20,
    backgroundColor: "#f6f6f6",
    paddingLeft: 20,
    marginRight: "auto",
    marginLeft: "auto",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
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
    backgroundColor: "#f6f6f6",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    paddingLeft: 20,
  },
  icon: {
    color: "#adadad",
  },
});

export default styles;
