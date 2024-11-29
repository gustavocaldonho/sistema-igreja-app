import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "85%",
    marginTop: 12,
    justifyContent: "space-between",
  },
  boxFiltersAndMain: {
    height: "78%",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
  },
  boxFilters: {
    maxHeight: "10%",
  },
  main: {
    maxHeight: "90%",
    overflow: "hidden",
  },
  boxBalance: {
    maxHeight: "22%",
    borderRadius: 10,
  },
  backgroundColorGray: {
    backgroundColor: "#f5f5f5",
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
