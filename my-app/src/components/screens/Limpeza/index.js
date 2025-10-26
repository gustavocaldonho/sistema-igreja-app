import React, { useState, useRef } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import PageBase from "../PageBase";
import BoxFilters from "./BoxFilters";
import styles from "./style";
import ItemCleaningContent from "./ItemCleaningContent.js";
import LoadingIndicator from "../../auxiliary/LoadingIndicator";
import { getCurrentMonthAndYear } from "./functions.js";
import ModalInputValueUnit from "./ModalInputValueUnit/index.js";
import Icon from "react-native-vector-icons/FontAwesome";
import { converterParaCentavos } from "./functions.js";
import { formatInReal } from "../Dizimo/functions.js";


export default function Limpeza({ navigation }) {
  const [selectedOption, setSelectedOption] = useState(
    getCurrentMonthAndYear()
  );
  const [monthList] = useState([
    { id: 12, label: "DEZEMBRO", value: "december", year: "2025" },
    { id: 11, label: "NOVEMBRO", value: "november", year: "2025" },
    { id: 10, label: "OUTUBRO", value: "october", year: "2025" },
    { id: 9, label: "SETEMBRO", value: "september", year: "2025" },
    { id: 8, label: "AGOSTO", value: "august", year: "2025" },
    { id: 7, label: "JULHO", value: "july", year: "2025" },
    { id: 6, label: "JUNHO", value: "june", year: "2025" },
    { id: 5, label: "MAIO", value: "may", year: "2025" },
    { id: 4, label: "ABRIL", value: "april", year: "2025" },
  ]);
  const [visibleIndicatorMain, setVisibleIndicatorMain] = useState(false);
  const [totalItemsChecked, setTotalItemsChecked] = useState({
    totalItems: 0,
    checkedItems: 0,
    valueTotal: 0,
  });
  const [unitValue, setUnitValue] = useState("20,00");
  const [modalInputUnitValueVisible, setModalInputUnitValueVisible] =
    useState(false);
  const unitValueRef = useRef(null); 

  const updateItemsChecked = (value) => {
    setTotalItemsChecked((prevState) => ({
      ...prevState,
      valueTotal: prevState.valueTotal + value,

    }));
  };

  return (
    <PageBase title={"Limpeza"}>
      {modalInputUnitValueVisible ? (
        <ModalInputValueUnit
          inputRef={unitValueRef}
          unitValue={unitValue}
          setUnitValue={setUnitValue}
          setModalInputUnitValueVisible={setModalInputUnitValueVisible}
          modalInputUnitValueVisible={modalInputUnitValueVisible}
        />
      ) : (
        <View style={styles.content}>
          <BoxFilters
            options={monthList}
            selectedValue={selectedOption}
            onValueChange={(value) => setSelectedOption(value)}
          />

          <TouchableOpacity
            style={styles.boxUnitValue}
            activeOpacity={0.8}
            onPress={() =>
              setModalInputUnitValueVisible(!modalInputUnitValueVisible)
            }
          >
            <View style={styles.boxUnitValueLeft}>
              <Icon name={"pencil-square-o"} style={styles.icon} />
              <Text style={styles.textUnitValue}>Valor Unitário</Text>
            </View>
            <Text style={styles.textUnitValue}>{unitValue}</Text>
          </TouchableOpacity>

          <View style={styles.main}>
            {visibleIndicatorMain && <LoadingIndicator color="#339dd7" />}
            <ItemCleaningContent
              selectedOption={selectedOption}
              setVisibleIndicatorMain={setVisibleIndicatorMain}
              setTotalItemsChecked={setTotalItemsChecked}
              updateItemsChecked={updateItemsChecked}
              unitValue={converterParaCentavos(unitValue)}
            />
          </View>

          <View style={styles.footer}>
            <View style={styles.boxValueTotal}>
              <Text style={styles.textValueTotal}>Total: </Text>
              <Text style={styles.textValueTotal}>{formatInReal(totalItemsChecked.valueTotal)}</Text>
            </View>
            <View style={styles.boxValueTotal}>
              <Text style={styles.textValueTotal}>Pagos: </Text>
              <Text style={styles.textValueTotal}>
                {totalItemsChecked.checkedItems}/{totalItemsChecked.totalItems}
              </Text>
            </View>
          </View>
        </View>
      )}
    </PageBase>
  );
}
