import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#339dd7",
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    marginBottom: -50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  buttonSalvar: {
    marginTop: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
    backgroundColor: '#339dd7',
  },
  textSalvar:{
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;