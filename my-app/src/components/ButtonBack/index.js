import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet } from "react-native";

export default function ButtonBack({ navigation, color }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.boxIcon}
    >
      <Icon name="chevron-left" size={25} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boxIcon: {
    position: "absolute",
    left: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

// import React from "react";
// import { TouchableOpacity } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { StyleSheet } from "react-native";

// export default function ButtonBack({ navigation, color }) {
//   return (
//     <TouchableOpacity
//       onPress={() => navigation.goBack()}
//       style={styles.boxIcon}
//     >
//       <Icon name="chevron-left" size={25} color={color} style={styles.icon} />
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   boxIcon: {},
//   icon: {
//     paddingVertical: 10,
//     paddingLeft: 20,

//     borderWidth: 2,
//   },
// });
