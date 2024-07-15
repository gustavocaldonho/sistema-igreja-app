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
    width: 200,
    height: 200,
    marginTop: 15,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#fff",
    overflow: "hidden",
  },
  imageProfile: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  boxNamePatron: {
    width: "90%",
    alignSelf: "center",
    paddingVertical: 10,
    marginBottom: 10,
  },
  textNamePatron: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
  },
  textLocation: {
    color: "#fff",
    opacity: 0.8,
    fontSize: 18,
    textAlign: "center",
  },
  boxInformations: {
    width: "85%",
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 20,
  },
  boxHighlightInformations: {
    gap: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  titleBoxAdvidors: {
    alignSelf: "center",
    color: "#fff",
    fontWeight: "500",
    fontSize: 15,
    marginBottom: 15,
  },
  boxAddMembro: {
    width: "100%",
    height: 55,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    borderWidth: 2,
    borderColor: "#fff",
  },
  textAddMembro: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "500",
  },
  iconPlusMembro: {
    fontSize: 18,
    color: "#fff",
  },
  buttonChangeDatas: {
    alignSelf: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginTop: 10,
    backgroundColor: "#339DD7",
    borderWidth: 1,
    borderColor: "#fff",
  },
  textChangeDatas: {
    alignSelf: "center",
    color: "#fff",
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
