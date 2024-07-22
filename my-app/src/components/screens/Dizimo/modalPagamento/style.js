import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#339dd7",
    marginTop: 85,
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
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  boxIconClose: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  iconClose: {
    fontSize: 30,
    color: "#fff",
  },
  modalText: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: "center",
  },
  boxButtonPix: {
    backgroundColor: "#5cc25f",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 20,
  },
  textButtonPix: {
    color: "white",
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "500",
  },
  qrcode: {
    alignSelf: "center",
  },
  boxButtonCopyCode: {
    backgroundColor: "#339dd7",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 20,
  },
  textButtonCode: {
    color: "white",
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "500",
  },
});

export default styles;
