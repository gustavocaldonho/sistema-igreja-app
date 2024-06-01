import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "red",
  },
  main: {
    width: "100%",
    paddingHorizontal: 15,
  },
  boxHeader: {
    height: 130,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },
  textHeader: {
    fontSize: 40,
    color: "#339DD7",
  },
  boxItem: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginTop: 20,
    gap: 5,
  },
  boxTitle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textTitle: {
    fontSize: 20,
    color: "#f094c0",
    fontWeight: "500",
  },
  boxBody: {
    width: "100%",
  },
  textBody: {
    fontSize: 17,
    color: "#339dd7",
  },
  titleNotDisplayed: {
    fontWeight: "bold",
  },
  notRead: {
    borderWidth: 3,
    borderColor: "#f094c0",
  },
  iconNotDisplayed: {
    color: "#f094c0",
    fontSize: 20,
    alignSelf: "center",
  },
});

export default styles;
