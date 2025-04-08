import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    // marginTop: 10,
    padding: 10,
    // borderRadius: 10,
    // backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    // borderWidth: 1,
  },
  boxName: {
    width: "90%",
    flexWrap: "nowrap",
    // borderWidth: 1,
  },
  boxCheck: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
  },
  textName: {
    fontSize: 16,
    color: "#000",
  },
});

export default styles;
