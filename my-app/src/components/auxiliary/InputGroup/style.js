import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: height * 0.065,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
    borderRadius: 50,
  },
  input: {
    width: "85%",
    height: "100%",
    fontSize: width * 0.05,
    paddingLeft: 20,
    marginRight: "auto",
    marginLeft: "auto",
  },
  inputPassword: {
    width: "70%",
  },
  inputPicker: {
    paddingLeft: 5,
    height: Platform.OS === "ios" ? 50 : 40,
    justifyContent: "center",
    overflow: "hidden",
  },
  labelPicker: {
    // color: "#adadad",
    fontSize: 15,
    // color: "#000",
    // backgroundColor: "#f6f6f6",
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
    fontSize: width * 0.05,
  },
  boxIconRight: {
    paddingLeft: 0,
  },
});

export default styles;
