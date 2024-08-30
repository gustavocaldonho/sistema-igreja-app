import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ItemDizimo from "../ItemDizimo";

export default function ItemDizimoContent({ setModalVisible, setItemClicked }) {
  const [dizimoList, setDizimoList] = useState([
    {
      month: "august",
      year: "2024",
      status: "não pago",
    },
    // {
    //   month: "JUNHO",
    //   year: "2024",
    //   status: "não pago",
    // },
    // {
    //   month: "JULHO",
    //   year: "2024",
    //   status: "não pago",
    // },
  ]);

  //   async function getWarningListForm() {
  //     try {
  //       setVisibleIndicator(true);
  //       const token = await AsyncStorage.getItem("AccessToken");
  //       const response = await getTenWarnings(user.community, token);
  //       if (response.status === 200) {
  //         setWarningList(response.data);
  //       } else {
  //         AlertMsg("Não retornou a lista de avisos.");
  //       }
  //       setVisibleIndicator(false);
  //     } catch (error) {
  //       AlertMsg(`Falha na requisição. ${error}`);
  //     }
  //   }

  useEffect(() => {
    // getWarningListForm();
  }, []);

  return (
    <View>
      {dizimoList.map((d, idx) => (
        <ItemDizimo
          month={d.month}
          year={d.year}
          status={d.status}
          setModalVisible={setModalVisible}
          setItemClicked={setItemClicked}
          key={`dizimo-item-${idx}`}
        />
      ))}
    </View>
  );
}
