import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Os campos 'height' de 'boxBackgroundTop' e de 'boxFormLogin' estão dimensionados numericamente. Dessa forma, talvez não fiquem responsivos, isto é, em outros dispositivos a formatação fique incorreta.
  container: {
    flex: 1,
  },
  main: {
    gap: 40,
    paddingTop: 60,
  },
  boxFormLogin: {
    width: "85%",
    borderRadius: 35,
    alignSelf: "center",
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: "#ffffff",
  },
  boxFormCadastro: {
    width: "85%",
    borderRadius: 35,
    paddingVertical: 20,
    alignSelf: "center",
    backgroundColor: "#ffffff",
  },
  buttonBack: {
    position: "absolute",
    top: 50,
    left: 0,
  },
  textButtonBack: {
    padding: 20,
  },
  sizeSmallHeader: {
    fontSize: 37,
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
