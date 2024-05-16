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
  centeredView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 85,
  },
  modalView: {
    margin: 20,
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
  buttonClose: {
    borderRadius: 20,
    padding: 5,
    position: "absolute",
    end: 5,
    top: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 18,
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
  errorMessage: {
    fontSize: 14,
    color: "red",
    paddingLeft: 20,
    fontWeight: "bold",
  },
  boxButtonCopyCode: {
    backgroundColor: "#f094c0",
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
