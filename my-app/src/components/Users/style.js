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
  },
  main: {
    width: "90%",
    alignSelf: "center",
    overflow: "hidden",
    marginVertical: 20,
    gap: 8,
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
