import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  lineHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxUserProfile: {
    width: "75%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  boxImageProfile: {
    width: "18%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageProfile: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  boxInfoUser: {
    width: "70%",
    justifyContent: "center",
  },
  textNameUser: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  textPatron: {
    fontSize: 12,
    color: "#fff",
  },
  buttonSignOut: {
    width: "20%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 10,
    gap: 5,
  },
  textSignOut: {
    fontSize: 15,
    color: "#fff",
  },
  iconSignOut: {
    fontSize: 20,
    color: "#fff",
  },
});

export default styles;
