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
    height: 100,
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginTop: 20,
  },
  boxTop: {
    width: "100%",
    height: "70%",
    flexDirection: "row",
  },
  boxMonth: {
    height: "100%",
    width: "70%",
    display: "flex",
    justifyContent: "center",
  },
  textMonth: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f094c0",
  },
  boxPayButton: {
    height: "100%",
    width: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  payButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#f094c0",
  },
  textPayButton: {
    color: "#fff",
    fontWeight: "700",
  },
  boxIconCheck: {
    backgroundColor: "#f094c0",
    padding: 10,
    borderRadius: 10,
  },
  boxBottom: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
  },
  boxObs: {
    width: "70%",
    height: "100%",
  },
  boxStatus: {
    height: "100%",
    width: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textStatus: {
    color: "#f094c0",
    fontWeight: "bold",
  },
  textObs: {
    color: "#f094c0",
  },
});

export default styles;
