import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    flex: 1,
    overflow: "hidden",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 2,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#339dd7",
    backgroundColor: "#339dd7",
  },
  main: {
    width: "90%",
    alignSelf: "center",
    overflow: "hidden",
    marginBottom: 20,
    gap: 8,
  },
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
  boxItem: {
    width: "100%",
    height: 60,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderColor: "#339dd7",
  },
  boxIconLeft: {
    height: "100%",
    width: "10%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  iconUser: {
    fontSize: 20,
    color: "#f094c0",
  },
  boxName: {
    height: "100%",
    width: "80%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textName: {
    fontSize: 20,
    color: "#f094c0",
    fontWeight: "500",
  },
  boxIconRight: {
    height: "100%",
    width: "10%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  iconRight: {
    fontSize: 17,
    color: "#339dd7",
  },
});

export default styles;
