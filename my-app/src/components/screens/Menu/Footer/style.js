import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",

    // borderWidth: 1,
  },
  logo: {
    width: 80,
    height: 70,
    alignSelf: "center",
    marginBottom: 10,
  },
  footerTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  footerSubTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  subTitle: {
    color: "#fff",
    fontSize: 12,
    fontStyle: "italic",
  },
  iconCopyright: {
    fontSize: 10,
  },
});

export default styles;
