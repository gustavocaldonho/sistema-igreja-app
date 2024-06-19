import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxItem: {
    width: "100%",
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginTop: 20,
    gap: 5,
  },
  boxTop: {
    flexDirection: "row",
  },
  boxTitle: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textTitle: {
    fontSize: 20,
    color: "#f094c0",
    fontWeight: "500",
  },
  boxIcons: {
    width: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  icon: {
    fontSize: 25,
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
