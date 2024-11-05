import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 10,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  userLogged: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  buttonSignOut: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  textSignOut: {
    fontSize: 18,
    color: "#fff",
  },
  iconSignOut: {
    fontSize: 22,
    color: "#fff",
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
    fontSize: 14,
    fontStyle: "italic",
  },
});

export default styles;
