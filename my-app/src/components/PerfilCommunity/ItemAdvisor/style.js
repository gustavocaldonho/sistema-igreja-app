import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemAdvisor: {
    width: "100%",
    height: 55,
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "center",
    borderRadius: 15,
    marginBottom: 10,
  },
  itemAdvisorMiddle: {
    width: "70%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  itemAdvisorLeft: {
    width: "10%",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  itemAdvisorRight: {
    width: "10%",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  textNameAdvisor: {
    textAlign: "center",
    color: "#f094c0",
    fontSize: 18,
    fontWeight: "500",
  },
  positionAdvisor: {
    color: "#339DD7",
    fontSize: 15,
  },
});

export default styles;
