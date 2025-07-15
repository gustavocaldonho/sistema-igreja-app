import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 80,
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
    paddingVertical: 60,
    paddingHorizontal: 10,
  },
  iconClose: {
    color: "#fff",
    fontSize: 25,
  },
});

export default styles;
