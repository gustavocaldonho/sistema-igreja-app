import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 2,
    alignSelf: "center",
    backgroundColor: "#339dd7",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
  textTitle: {
    fontSize: 20,
    color: "#339dd7",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    marginTop: 10,
    color: "#339dd7",
    fontWeight: "500",
    textAlign: "center",
  },
  subTitleHighlight: {
    alignSelf: "center",
    color: "#339dd7",
    fontSize: 12,
  },
  textHighlight: {
    fontSize: 18,
    fontWeight: "700",
    color: "#f094c0",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default styles;
