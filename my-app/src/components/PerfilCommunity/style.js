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
  itemHighlightInformation: {
    width: "48%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 20,
  },
  numberHighlight: {
    color: "#f094c0",
    fontSize: 25,
    fontWeight: "900",
  },
  textHighlight: {
    color: "#fff",
    width: "100%",
    textAlign: "center",
    backgroundColor: "#f094c0",
    fontStyle: "italic",
    fontSize: 18,
    fontWeight: "500",
    paddingVertical: 10,
    borderRadius: 10,
  },
  titleBoxAdvidors: {
    alignSelf: "center",
    color: "#fff",
    fontWeight: "500",
    fontSize: 15,
    marginBottom: 15,
  },
  itemAdvisor: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    // borderWidth: 1,
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
