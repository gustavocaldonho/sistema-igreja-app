import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 10,
    justifyContent: "space-between",
  },
  boxUnitValue:{
    height: "6%",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10
  },
  boxUnitValueLeft: {
    flexDirection: "row",
    gap: 5,
  },
  main: {
    height: "74%",
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  footer: {
    height: "10%",
    width: "100%",
    alignSelf: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxValueTotal: {
    marginBottom: 15,
    height: height * 0.06,
    paddingHorizontal: 15,
    backgroundColor: "#287BBF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  textValueTotal: {
    fontSize: width * 0.04,
    fontWeight: "900",
    color: "#fff",
  },
  textUnitValue:{
    fontSize: 18,
    color: "#287BBF",
    fontWeight: "800",
  },
  icon:{
    fontSize: 25,
    color: "#287BBF",
  },
});

export default styles;
