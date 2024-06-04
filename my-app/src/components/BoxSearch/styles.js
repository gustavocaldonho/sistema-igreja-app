import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxSearch: {
    height: 70,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingBottom: 15,
  },
  boxTextInput: {
    width: "90%",
    height: "100%",
    justifyContent: "flex-end",
    borderBottomWidth: 1,
    borderColor: "#B3E5FC",
  },
  input: {
    backgroundColor: "#339dd7",
    fontSize: 20,
    color: "#fff",
    paddingBottom: 5,
  },
  boxIconSearch: {
    width: "10%",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#B3E5FC",
  },
  iconSearch: {
    fontSize: 20,
    color: "#B3E5FC",
    justifyContent: "flex-end",
  },
});

export default styles;
