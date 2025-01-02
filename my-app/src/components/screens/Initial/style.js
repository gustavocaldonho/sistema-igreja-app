import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    gap: height * 0.05,
    paddingTop: height * 0.08,
  },
  boxFormLogin: {
    width: "85%",
    borderRadius: 35,
    alignSelf: "center",
    paddingTop: height * 0.03,
    paddingBottom: height * 0.05,
    backgroundColor: "#ffffff",
  },
  boxFormCadastro: {
    width: "85%",
    minHeight: height * 0.6,
    borderRadius: 35,
    paddingVertical: height * 0.04,
    alignSelf: "center",
    backgroundColor: "#ffffff",
  },
  buttonBack: {
    position: "absolute",
    top: height * 0.06,
    left: 0,
  },
  textButtonBack: {
    padding: width * 0.05,
  },
  sizeSmallHeader: {
    fontSize: width * 0.1,
  },
  boxShadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: height * 0.004,
    },
    shadowOpacity: 0.9,
    shadowRadius: height * 0.0035,
    elevation: 5,
  },
});

export default styles;
