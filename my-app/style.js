import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Os campos 'height' de 'boxBackgroundTop' e de 'boxFormLogin' estão dimensionados numericamente. Dessa forma, talvez não fiquem responsivos, isto é, em outros dispositivos a formatação fique incorreta.
  headerStyle: {
    height: 130,
    backgroundColor: "#fff",
  },
  titleHeader: {
    fontSize: 40,
    color: "#339dd7",
  },
});

export default styles;
