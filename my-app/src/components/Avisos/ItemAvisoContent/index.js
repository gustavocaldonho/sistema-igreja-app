import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import ItemAviso from "../ItemAviso";

export default function ItemAvisoContent({ warningList }) {
  return (
    <View>
      {warningList.map((w, idx) => (
        <ItemAviso
          title={w.title}
          message={w.message}
          viewed={false}
          key={`warning-item-${idx}`}
        />
      ))}
    </View>
  );
}
