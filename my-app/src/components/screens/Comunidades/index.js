import React, { useState } from "react";
import { View } from "react-native";
import PageBase from "../PageBase";
import ItemCommunityContent from "./ItemCommunityContent";
import ModalCommunity from "./ModalCommunity";
import LoadingIndicator from "../../auxiliary/LoadingIndicator";

export default function Comunidades({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [visibleIndicator, setVisibleIndicator] = useState(false);

  function OnPressButtonAdd() {
    setModalVisible(!modalVisible);
  }

  return (
    <PageBase
      title={"Comunidades"}
      signButtonAdd={true}
      onPressAdd={OnPressButtonAdd}
    >
      <ModalCommunity
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View>
        {visibleIndicator ? <LoadingIndicator /> : ""}
        <ItemCommunityContent setVisibleIndicator={setVisibleIndicator} />
      </View>
    </PageBase>
  );
}
