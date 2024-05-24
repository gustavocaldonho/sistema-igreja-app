import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
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
    width: "100%",
    paddingHorizontal: 15,
  },
  boxItem: {
    width: "100%",
    height: 200,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginTop: 20,
  },
  boxTop: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
  },
  boxStatus: {
    height: "100%",
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  textStatus: {
    width: "100%",
    color: "#339dd7",
    fontWeight: "bold",
    alignSelf: "center",
  },
  boxYear: {
    height: "100%",
    width: "30%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  textYear: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#339dd7",
  },
  boxMiddle: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
  },
  textValue: {
    fontSize: 50,
    fontWeight: "bold",
    // color: "#339dd7",
    color: "#f094c0",
  },
  boxBottom: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
  },
  boxObs: {
    width: "60%",
    height: "100%",
    justifyContent: "center",
  },
  textObs: {
    color: "#339dd7",
  },
  boxPayButton: {
    height: "100%",
    width: "40%",
    justifyContent: "center",
  },
  payButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#339dd7",
    alignItems: "center",
  },
  textPayButton: {
    color: "#fff",
    fontWeight: "700",
  },
});

export default styles;
