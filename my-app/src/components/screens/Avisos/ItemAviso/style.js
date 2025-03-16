import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxItem: {
    width: "100%",
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 10,
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
  boxPostedByAndAt: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textPostedByAndAt: {
    color: "#EE95C2",
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
