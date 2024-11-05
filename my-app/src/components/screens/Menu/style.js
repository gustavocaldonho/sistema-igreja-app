import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  userLogin: {
    fontSize: 20,
    color: "#fff",
  },
  buttonSignOut: {
    gap: 5,
    flexDirection: "row",
  },
  textSignOut: {
    fontSize: 20,
    color: "#fff",
  },
  iconSignOut: {
    fontSize: 25,
    color: "#fff",
  },
  logo: {
    width: 140,
    height: 120,
    marginTop: 50,
    marginHorizontal: "auto",
  },
  boxTitleMenu: {
    width: "100%",
    marginBottom: 20,
    marginTop: 40,
    // justifyContent: "center",
    // alignItems: "center",
  },
  textMenu: {
    color: "#fff",
    // fontWeight: "500",
    fontSize: 30,
    textAlign: "center",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 10,
  },
  main: {
    width: "75%",
    height: "100%",
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 15,
    justifyContent: "center",
    // marginBottom: 100,
    // alignContent: "center",
    columnGap: 30,
    // borderWidth: 5,
    // borderColor: "red",
  },
  footer: {
    position: "absolute",
    alignSelf: "center",
    bottom: 20,
    gap: 5,
  },
  footerTitle: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "700",
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
