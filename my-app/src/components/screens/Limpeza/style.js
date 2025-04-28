import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 10,
    justifyContent: "space-between",
  },
  main: {
    height: "80%",
    borderRadius: 10,
    backgroundColor: "#fff",
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
});

export default styles;
