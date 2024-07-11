import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#339DD7",
    paddingTop: 60,
  },
  boxTop: {
    width: "100%",
  },
  boxButtonBack: {
    position: "absolute",
    top: 0,
  },
  boxIconCamera: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 8,
    borderRadius: 40,
    backgroundColor: "#fff",
  },
  iconCamera: {
    fontSize: 25,
    color: "#339DD7",
  },
  boxImageProfile: {
    width: 160,
    height: 160,
    marginTop: 15,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 100,
  },
  imageProfile: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  boxNameUser: {
    width: "85%",
    alignSelf: "center",
    paddingVertical: 10,
    marginBottom: 10,
  },
  textNameUser: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
  },
  boxInformationsUser: {
    width: "85%",
    alignSelf: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderRadius: 35,
    marginBottom: 20,
  },
  textTitleBox: {
    alignSelf: "center",
    color: "#f094c0",
    fontSize: 18,
    fontWeight: "bold",
  },

  boxShadowLight: {
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.05,
    elevation: 20,
  },
  boxShadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.05,
    elevation: 5,
  },
});

export default styles;
