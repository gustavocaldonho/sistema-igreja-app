import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 2,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#339dd7",
  },
  main: {
    width: "100%",
    paddingHorizontal: 15,
  },
  boxItem: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginTop: 20,
    gap: 5,
  },
  boxTitle: {
    width: "100%",
  },
  textTitle: {
    fontSize: 20,
    color: "#f094c0",
    fontWeight: "500",
  },
  boxBody: {
    width: "100%",
  },
  textBody: {
    fontSize: 17,
    color: "#339dd7",
  },
});

export default styles;
