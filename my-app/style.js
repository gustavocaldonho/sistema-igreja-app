import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Os campos 'height' de 'boxBackgroundTop' e de 'boxFormLogin' estão dimensionados numericamente. Dessa forma, talvez não fiquem responsivos, isto é, em outros dispositivos a formatação fique incorreta.

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  main: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
  },
  boxBackgroundTop: {
    height: 500,
    width: "100%",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    // backgroundColor: "#339dd7",
  },
  boxFormLogin: {
    height: 400,
    width: "85%",
    borderRadius: 35,
    position: "absolute",
    alignSelf: "center",
    top: 280,
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.05,
    elevation: 5,
  },
  boxFormCadastro: {
    display: "flex",
    height: 530,
    width: "85%",
    borderRadius: 35,
    position: "absolute",
    alignSelf: "center",
    top: 240,
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.05,
    elevation: 5,
  },
  buttonAccount: {
    width: "70%",
    backgroundColor: "#339dd7",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 14,
    paddingBottom: 14,
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },
  textButtonAccount: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
  buttonBack: {
    position: "absolute",
    top: 70,
    left: 0,
  },
  textButtonBack: {
    padding: 20,
  },
  headerStyle: {
    height: 130,
    backgroundColor: "#fff",
  },
  titleHeader: {
    fontSize: 40,
    color: "#339dd7",
  },
  sizeSmallHeader: {
    fontSize: 37,
  },
});

export default styles;
