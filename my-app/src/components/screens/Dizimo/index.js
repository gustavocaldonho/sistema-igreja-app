import React, { useState } from "react";
import { View, Text } from "react-native";
import ModalPagamentoDizimo from "./modalPagamento/";
import PageBase from "../PageBase";
import ItemDizimoContent from "./ItemDizimoContent";
import LoadingIndicator from "../../auxiliary/LoadingIndicator";
import { formatInReal } from "./functions";
import styles from "./style";

export default function Dizimo({ navigation, route }) {
  const { cpf } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [itemClicked, setItemClicked] = useState("");
  const [visibleIndicator, setVisibleIndicator] = useState(false);
  const [totalDizimo, setTotalDizimo] = useState(0);

  return (
    <PageBase title={"Dízimo"}>
      {visibleIndicator ? <LoadingIndicator /> : ""}
      {modalVisible ? (
        <ModalPagamentoDizimo
          year={itemClicked.year}
          month={itemClicked.month}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      ) : (
        <View style={{ flex: 1 }}>
          <ItemDizimoContent
            cpf={cpf}
            setModalVisible={setModalVisible}
            setItemClicked={setItemClicked}
            setVisibleIndicator={setVisibleIndicator}
            setTotalDizimo={setTotalDizimo}
          />

          <View style={styles.boxValueTotalDizimoFooter}>
            <Text style={styles.textValueTotalDizimoFooter}>Total: </Text>
            <Text style={styles.textValueTotalDizimoFooter}>
              {formatInReal(totalDizimo)}
            </Text>
          </View>
        </View>
      )}
    </PageBase>
  );
}
