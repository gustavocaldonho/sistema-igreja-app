import { StyleSheet } from "react-native";

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
    width: "90%",
    height: "70%",
  },
  fullImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  closeButton: {
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 30,
  },
  textClose: {
    fontSize: 16,
    color: "#fff",
  },
});
