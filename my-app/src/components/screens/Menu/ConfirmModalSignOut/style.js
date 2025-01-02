import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: width * 0.8,
    backgroundColor: "#fff",
    paddingVertical: height * 0.05,
    paddingHorizontal: width * 0.05,
    borderRadius: 15,
    gap: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  modalText: {
    fontSize: width * 0.05,
    color: "#339dd7",
    marginBottom: height * 0.025,
    textAlign: "center",
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  modalButton: {
    flex: 1,
    paddingVertical: height * 0.015,
    marginHorizontal: width * 0.02,
    backgroundColor: "#f094c0",
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: width * 0.04,
  },
  cancelButton: {
    backgroundColor: "#339dd7",
  },
  cancelButtonText: {
    color: "#fff",
  },
});

export default styles;
