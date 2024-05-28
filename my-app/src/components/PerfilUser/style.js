import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#339DD7",
  },
  boxTop: {
    width: "100%",
  },
  boxIconLeft: {
    marginTop: 70,
    paddingLeft: 15,
  },
  iconLeft: {
    color: "#fff",
  },
  boxImageProfile: {
    width: 200,
    height: 200,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 120,
    borderColor: "#fff",
    // borderWidth: 3,
  },
  imageProfile: {
    width: "100%",
    height: "100%",
    borderRadius: 120,
  },
  boxNameUser: {
    paddingVertical: 10,
    marginBottom: 10,
  },
  textNameUser: {
    color: "#fff",
    fontSize: 30,
    alignSelf: "center",
    writingDirection: "rtl",
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
  line: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  textLabel: {
    fontSize: 15,
    color: "#f094c0",
    fontWeight: "bold",
  },
  textData: {
    color: "#339DD7",
    fontSize: 15,
    fontWeight: "400",
  },
  buttonChangeDatas: {
    width: "70%",
    alignSelf: "center",
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: "#339DD7",
  },
  textChangeDatas: {
    alignSelf: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  textTitleBox: {
    alignSelf: "center",
    color: "#f094c0",
    fontSize: 18,
    fontWeight: "bold",
  },
  boxLineListDizimo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  boxLineListMortuary: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    paddingVertical: 10,
    flexWrap: "wrap",
  },
  itemLineList: {
    width: "23%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: "#f094c0",
    gap: 5,
    borderWidth: 3,
    borderColor: "#fff",
  },
  textMonth: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  textYear: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
  },
  iconStatusMonth: {
    fontSize: 15,
    color: "#fff",
  },
  currentMonth: {
    borderColor: "#339DD7",
  },
  currentYear: {
    borderColor: "#339DD7",
  },
  blockedMonth: {
    opacity: 0.7,
    // borderColor: "#fff",
  },

  boxShadowLight: {
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.05,
    elevation: 50,
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
