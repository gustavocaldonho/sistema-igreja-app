import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalView: {
    width: "90%",
    margin: 20,
    marginTop: 85,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  boxIconClose: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 15,
  },
  iconClose: {
    fontSize: 25,
    color: "#f094c0",
  },
  boxButton: {
    backgroundColor: "#339dd7",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 10,
  },
  textButton: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "500",
  },
});

export default styles;
