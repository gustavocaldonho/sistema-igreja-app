import { StyleSheet, Dimensions } from "react-native";

const heightScreen = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#339dd7",
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 30,
  },
  closeButton: {
    fontSize: 27,
    color: "#fff",
    marginRight: 10,
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 25,
  },
  boxTitleMonth: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "auto",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderColor: "#ccc",
    width: "40%",
  },
  titleMonth: {
    fontSize: 20,
    textTransform: "uppercase",
  },
  boxChart: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  titleChart: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center",
  },
  titleChartResumeYear: {
    marginTop: 10,
  },
  textNotDatas: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 20,
  },
  boxChartResumeYear: {
    height: heightScreen * 0.9,
  },
});
