import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 85 : 10,
    alignItems: "center",
    gap: 20,
  },
  main: {
    width: "85%",
    paddingVertical: 20,
    backgroundColor: "#fff",
    borderRadius: 25,
    gap: 10,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  buttonClose: {
    position: "absolute",
    top: 15,
    padding: 10,
    left: 10,
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "ios" ? 70 : 0,
  },
  iconClose: {
    color: "#fff",
    fontSize: 25,
  },
});

export default styles;
