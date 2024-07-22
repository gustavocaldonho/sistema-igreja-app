import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  line: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  textLabel: {
    fontSize: 15,
    color: "#f094c0",
    fontWeight: "bold",
  },
  textData: {
    color: "#339DD7",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "right",
  },
  textLabelEmail: {
    width: "25%",
  },
  textDataEmail: {
    width: "75%",
  },
  textLabelComunity: {
    width: "40%",
  },
  textDataComunity: {
    width: "60%",
  },
  buttonChangeDatas: {
    width: "70%",
    alignSelf: "center",
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: "#339DD7",
  },
  textChangeDatas: {
    alignSelf: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});

export default styles;
