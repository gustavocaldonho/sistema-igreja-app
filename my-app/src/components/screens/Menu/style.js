import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
  },
  boxTitleMenu: {
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textMenu: {
    color: "#f0f0f0",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
  },
  innerContainer: {
    flex: 1,
    paddingBottom: 30,
    justifyContent: "space-between",
  },
  main: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    paddingHorizontal: 20,
    marginTop: 120,
  },
  footer: {
    paddingVertical: 10,
    alignItems: "center",
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
