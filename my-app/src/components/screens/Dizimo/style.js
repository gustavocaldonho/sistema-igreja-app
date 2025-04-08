import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  boxValueTotalDizimoFooter: {
    position: "absolute",
    bottom: 0,
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
  textValueTotalDizimoFooter: {
    fontSize: width * 0.05,
    fontWeight: "900",
    color: "#fff",
  },
});

export default styles;
