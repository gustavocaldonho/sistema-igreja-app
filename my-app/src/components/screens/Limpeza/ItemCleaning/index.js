import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./style";
import CheckInput from "../CheckInput";
import LoadingIndicator from "../../../auxiliary/LoadingIndicator";
import { formatInReal } from "../../Dizimo/functions";

export default function ItemCleaning({
  id,
  name,
  payed,
  month,
  value,
  setor,
  updateItemsChecked,
  unitValue,
}) {
  const [payedState, setPayedState] = useState(payed);
  const [loadingCheckInput, setLoadingCheckInput] = useState(false);
  const [valuePayed, setValuePayed] = useState(value?? 0);

  return (
    <View style={[styles.content, payedState && styles.backgroundChecked]}>
      <View style={styles.boxName}>
        <Text style={styles.textName}>
          {setor} - {name} - {formatInReal(valuePayed/100)}
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
            value={value}
            setPayedState={setPayedState}
            setLoadingCheckInput={setLoadingCheckInput}
            updateItemsChecked={updateItemsChecked}
            unitValue={unitValue}
            valuePayed={valuePayed}
            setValuePayed={setValuePayed}
          />
        )}
      </View>
    </View>
  );
}
