import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./style";
import CheckInput from "../CheckInput";
import LoadingIndicator from "../../../auxiliary/LoadingIndicator";

export default function ItemCleaning({
  id,
  name,
  payed,
  month,
  setor,
  updateItemsChecked,
}) {
  const [payedState, setPayedState] = useState(payed);
  const [loadingCheckInput, setLoadingCheckInput] = useState(false);

  return (
    <View style={[styles.content, payedState && styles.backgroundChecked]}>
      <View style={styles.boxName}>
        <Text style={styles.textName}>
          {setor} - {name}
        </Text>
      </View>

      <View style={styles.boxCheck}>
        {loadingCheckInput ? (
          <LoadingIndicator size={"small"} color={"#339dd7"} />
        ) : (
          <CheckInput
            idItem={id}
            payed={payedState}
            month={month}
            setPayedState={setPayedState}
            setLoadingCheckInput={setLoadingCheckInput}
            updateItemsChecked={updateItemsChecked}
          />
        )}
      </View>
    </View>
  );
}
