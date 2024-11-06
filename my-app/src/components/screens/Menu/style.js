import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 60,
    paddingBottom: 10,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  boxUserProfile: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  boxImageProfile: {
    width: 40,
    height: 40,
    borderRadius: 100,
    // borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  imageProfile: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
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
    paddingVertical: 7,
    paddingHorizontal: 12,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 10,
  },
  textSignOut: {
    fontSize: 15,
    color: "#fff",
  },
  iconSignOut: {
    fontSize: 20,
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
    fontSize: 12,
    fontStyle: "italic",
  },
  iconCopyright: {
    fontSize: 10,
  },
  boxShadowLight: {
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.05,
    elevation: 20,
  },
});

export default styles;
