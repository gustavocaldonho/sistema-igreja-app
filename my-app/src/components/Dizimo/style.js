import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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
    backgroundColor: "#f094c0",
    marginBottom: 20,
  },
  boxTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "70%",
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
    color: "#ffffff",
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
    backgroundColor: "#ffffff",
  },
  textPayButton: {
    color: "#f094c0",
    fontWeight: "700",
  },
  boxObs: {
    width: "100%",
    height: "30%",
  },
  textObs: {
    color: "#ffffff",
  },
});

export default styles;
