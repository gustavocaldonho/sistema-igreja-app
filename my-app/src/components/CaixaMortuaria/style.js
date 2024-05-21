import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7c7de",
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
    color: "#f094c0",
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
    color: "#f094c0",
  },
  boxMiddle: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
  },
  textValue: {
    fontSize: 50,
    fontWeight: "bold",
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
    color: "#f094c0",
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
    backgroundColor: "#f094c0",
    alignItems: "center",
  },
  textPayButton: {
    color: "#fff",
    fontWeight: "700",
  },
});

export default styles;
